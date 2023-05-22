import React from 'react';
import { FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <br />
        <FilterInput type="text" value={filter} onChange={onFilter} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};