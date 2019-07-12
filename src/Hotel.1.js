import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hotelData from './hotel.data.json';
import './Hotel.css';

console.log(hotelData);

const FilterOptions = (props) => {
  const facilitiesArr = new Array(0);
  hotelData.map((hotel) => {
    const hotelFacilities = hotel.facilities;
    return hotelFacilities.map(facility => facilitiesArr.push(facility));
  });
  const facilitiesSet = [...new Set(facilitiesArr)];

  return (
    <div className="hotel-filters">
      <button
        className="filter-option filter-reset"
        type="button"
        onClick={() => props.handleFilterReset(null)}
      >
        Reset filter
      </button>
      {
        facilitiesSet.map(facility => (
          <button
            className="filter-option"
            key={facility}
            type="button"
            onClick={() => props.handleFilterClick(facility)}
          >
            {facility}
          </button>
        ))
      }
    </div>
  );
};

const HotelRow = (props) => {
  const {
    hotelId,
    name,
    starRating,
    facilities,
  } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{starRating}</td>
      <td>
        <ul>
          {
            facilities.map(facility => <li key={`${hotelId}_${facility}`}>{facility}</li>)
          }
        </ul>
      </td>
    </tr>
  );
};

class HotelList extends Component {
  state = {
    filters: null,
  }

  handleFilterReset = () => {
    this.setState({ filters: null });
  }

  handleFilterClick = (facility) => {
    this.setState({ filters: facility });
  }

  filterHotels = (filters) => {
    if (filters === null) return hotelData;

    const returnedHotel = hotelData.filter(hotel => hotel.facilities.includes(filters));

    return returnedHotel;
  };

  render() {
    const { filters } = this.state;
    return (
      <div className="hotel-list">
        <header>
          <h1>Hotel Filtering</h1>
        </header>
        <section className="hotel-content">
          <div className="hotel-filtering">
            <p>
              {
                `Current filter: ${filters || 'None'}`
              }
            </p>
            <FilterOptions
              handleFilterReset={this.handleFilterReset}
              handleFilterClick={this.handleFilterClick}
            />
          </div>
          <table className="">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Star rating</th>
                <th>Facilities</th>
              </tr>
              {
                this.filterHotels(filters).map((hotel) => {
                  const {
                    hotelId,
                    name,
                    starRating,
                    facilities,
                  } = hotel;
                  return (
                    <HotelRow
                      key={hotelId}
                      hotelId={hotelId}
                      name={name}
                      starRating={starRating}
                      facilities={facilities}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

HotelRow.propTypes = {
  hotelId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf.isRequired,
};

FilterOptions.propTypes = {
  handleFilterReset: PropTypes.objectOf.isRequired,
  handleFilterClick: PropTypes.objectOf.isRequired,
};

export default HotelList;
