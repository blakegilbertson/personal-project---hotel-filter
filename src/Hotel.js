import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import hotelData from './hotel.data.json';
import './Hotel.css';

console.log(hotelData);

class HotelList extends Component {
  render() {
    return (
      <div className="hotel-list">
        <header>
          <h1>Hotel Filtering</h1>
        </header>
        <section className="hotel-content">

        </section>
      </div>
    );
  }
}

export default HotelList;
