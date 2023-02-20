import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input type="text" onChange={onFilterChange} value={filter} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
