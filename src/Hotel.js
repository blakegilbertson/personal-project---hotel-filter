import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import hotelData from './hotel.data.json';
import './Hotel.css';
import HotelRow from './HotelRow';

class HotelList extends Component {
  state = {
    filter: null,
  }

  render() {
    return (
      <div className="hotel-list">
        <header>
          <h1>Hotel Filtering</h1>
        </header>
        <section className="hotel-content">
          <table className="hotel-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Star rating</th>
                <th>Facilities</th>
              </tr>
              {
                hotelData.map((hotel) => {
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
