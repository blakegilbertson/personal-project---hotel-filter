import React from 'react';
import PropTypes from 'prop-types';
import hotelData from './hotel.data.json';
import FilterCheckbox from './FilterCheckbox';

const FilterOptions = (props) => {
  const {
    hotelList,
    handleFilterReset,
    handleFilterCheck,
  } = props;

  const facilitiesArr = new Array(0);
  hotelData.map((hotel) => {
    const hotelFacilities = hotel.facilities;
    return hotelFacilities.map(facility => facilitiesArr.push(facility));
  });
  const facilitiesSet = [...new Set(facilitiesArr)];

  return (
    <div className={`${hotelList}-filter-options`}>
      <button
        className={`${hotelList}-filter-reset`}
        type="button"
        onClick={() => handleFilterReset(null)}
      >
        Reset filter
      </button>
      {
        facilitiesSet.map(facility => (
          <FilterCheckbox
            key={`filter_${facility}`}
            facility={facility}
            handleFilterCheck={handleFilterCheck}
          />
        ))
      }
    </div>
  );
};

FilterOptions.propTypes = {
  handleFilterReset: PropTypes.func.isRequired,
  handleFilterCheck: PropTypes.func.isRequired,
};

export default FilterOptions;
