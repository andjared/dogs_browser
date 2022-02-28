import React from "react";

export default function List({ breedsList }) {
  return (
    <div className="select">
      <label htmlFor="breeds">Choose a breed</label>
      <select name="breeds" id="breeds">
        {breedsList &&
          breedsList.map((breed) => <option key={breed}>{breed}</option>)}
      </select>
    </div>
  );
}
