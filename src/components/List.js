import React from "react";

export default function List({ breedsList, handleClick }) {
  return (
    <div className="select">
      <label htmlFor="breeds">Choose a breed</label>
      <select
        name="breeds"
        id="breeds"
        onClick={(e) => handleClick(e.target.value)}
      >
        {breedsList &&
          breedsList.map((breed) => <option key={breed}>{breed}</option>)}
      </select>
    </div>
  );
}
