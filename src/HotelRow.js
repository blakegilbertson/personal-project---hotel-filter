import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = (props) => {
  const {
    hotelId,
    name,
    starRating,
    facilities,
  } = props;

  console.log('typeof facilities: ', typeof facilities);

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
  hotelId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  facilities: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default HotelRow;
