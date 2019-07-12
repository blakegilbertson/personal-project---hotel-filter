import React from 'react';
import PropTypes from 'prop-types';

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

HotelRow.propTypes = {
  hotelId: PropTypes.number,
  name: PropTypes.string,
  starRating: PropTypes.number,
  facilities: PropTypes.arrayOf,
};

HotelRow.defaultProps = {
  hotelId: 666,
  name: 'Devils Paradise',
  starRating: 5,
  facilities: ['Lava bath', 'Pitch Fork Massage'],
};

export default HotelRow;
