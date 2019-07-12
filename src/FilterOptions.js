import React from 'react';
import hotelData from './hotel.data.json';

const FilterOptions = () => {
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
          <button
            className="filter-option"
            key={facility}
            type="button"
          >
            {facility}
          </button>
        ))
      }
    </div>
  );
};

export default FilterOptions;
