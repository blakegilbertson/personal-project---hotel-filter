import React from 'react';
import './Hotel.css';

const HotelRow = (props) => {
  const {
    hotelId,
    name,
    starRating,
    facilities,
  } = props;

  return (
    <tr className="hotel-row">
      <td>{name}</td>
      <td>{starRating}</td>
      <td>
        <ul>
          {
            facilities
              ? facilities.map(facility => <li key={`${hotelId}_${facility}`}>{facility}</li>)
              : null
          }
        </ul>
      </td>
    </tr>
  );
};

export default HotelRow;
