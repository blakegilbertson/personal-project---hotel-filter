import React from 'react';
import PropTypes from 'prop-types';
import hotelData from './hotel.data.json';
import FilterButton from './FilterButton';

const FilterOptions = (props) => {
  const {
    handleFilterReset,
    handleFilterClick,
  } = props;

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
        onClick={() => handleFilterReset(null)}
      >
        Reset filter
      </button>
      {
        facilitiesSet.map(facility => (
          <FilterButton
            key={`filter_${facility}`}
            facility={facility}
            handleFilterClick={handleFilterClick}
          />
        ))
      }
    </div>
  );
};

FilterOptions.propTypes = {
  handleFilterReset: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterOptions;
