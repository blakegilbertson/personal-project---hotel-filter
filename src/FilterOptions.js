import React from 'react';
import PropTypes from 'prop-types';
import hotelData from './hotel.data.json';
import FilterButton from './FilterButton';

const FilterOptions = (props) => {
  const {
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
      {
        facilitiesSet.map(facility => (
          <FilterButton
            facility={facility}
            handleFilterClick={handleFilterClick}
          />
        ))
      }
    </div>
  );
};

FilterOptions.propTypes = {
  handleFilterClick: PropTypes.func,
}

export default FilterOptions;
