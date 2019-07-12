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
          <table className="hotel-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Star rating</th>
                <th>Facilities</th>
              </tr>
              <tr className="hotel-row">
                <td></td>
                <td>Some rating</td>
                <td>Some facilities</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default HotelList;
