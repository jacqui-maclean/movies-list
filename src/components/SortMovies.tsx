//renders input box where user selects sort order
//stores the current sort order in state to render in the box
//accepts prop from MoviesList of onSort.
//onChange calls onSort with the new input value eg new sort order
//The new order is calculated and updated in the parent component eg MoviesList

import { useState } from "react";

interface Props {
  onSort: (sortOrder: string) => void;
}

const SortMovies = ({ onSort }: Props) => {
  const [sortOrder, setSortOrder] = useState("");
  return (
    <div>
      <form>
        <div className="input-group mb-3">
          <label className="input-group-text">Sort by:</label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              onSort(e.target.value);
            }}
          >
            <option value="">Choose...</option>
            <option value="title">Title</option>
            <option value="title-reverse">Title: Reverse</option>
            <option value="yearNew">Year: Newest first</option>
            <option value="yearOld">Year: Oldest first</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SortMovies;
