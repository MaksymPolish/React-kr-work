import React from "react";

const FilterBox = ({ filter, onFilterChange }) => {
  return (
    <div className="filter-box">
      <input
        type="text"
        placeholder="Search users by name..."
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterBox;
