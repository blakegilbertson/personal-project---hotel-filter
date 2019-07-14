import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = (props) => {
  const {
    facility,
    handleFilterClick,
  } = props;
  return (
    <button
      className="filter-option"
      key={facility}
      type="button"
      onClick={() => handleFilterClick(facility)}
    >
      {facility}
    </button>
  );
};

FilterButton.propTypes = {
  facility: PropTypes.string.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterButton;
