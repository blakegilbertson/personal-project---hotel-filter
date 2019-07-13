import React, { Component } from 'react';
import hotelData from './hotel.data.json';
import './Hotel.css';
import HotelRow from './HotelRow';
import FilterOptions from './FilterOptions';

console.log(hotelData);

class HotelList extends Component {
  state = {
    filterSet: null,
  }

  handleFilterClick = (facility) => {
    console.log('handleFilterClick facility: ', facility);
    this.setState({ filterSet: facility });
  }

  filterHotels = (filters) => {
    if (filters === null) return hotelData;

    const returnedHotel = hotelData.filter(hotel => hotel.facilities.includes(filters));

    return returnedHotel;
  };

  render() {
    const { filterSet } = this.state;
    return (
      <div className="hotel-list">
        <header>
          <h1>Hotel Filtering</h1>
        </header>
        <section className="hotel-content">
          <div className="hotel-filtering">
            <p>
              {
                `Current filter: ${filterSet || 'None'}`
              }
            </p>
            <FilterOptions
              handleFilterClick={this.handleFilterClick}
            />
          </div>
          <table className="hotel-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Star rating</th>
                <th>Facilities</th>
              </tr>
              {
                this.filterHotels(filterSet).map((hotel) => {
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

export default HotelList;
