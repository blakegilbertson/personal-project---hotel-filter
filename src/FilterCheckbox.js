import React from 'react';
import PropTypes from 'prop-types';

const FilterCheckbox = (props) => {
  const {
    facility,
    handleFilterCheck,
  } = props;
  return (
    <div className="checkbox-wrapper">
      <label id={`label_${facility}`} htmlFor={facility}>
        <input
          type="checkbox"
          className="filter-option"
          key={facility}
          id={facility}
          name={facility}
          onClick={e => handleFilterCheck(e)}
        />
        {facility}
      </label>

    </div>
  );
};

FilterCheckbox.propTypes = {
  facility: PropTypes.string.isRequired,
  handleFilterCheck: PropTypes.func.isRequired,
};

export default FilterCheckbox;
