"use client";

import { useState } from "react";
import SearchForm from "../../searchForm/SearchForm";
import TourList from "../tourList/TourList";

export default function FilterTours({ tours }) {
  const [filteredTours, setFilteredTours] = useState(tours);

  return (
    <>
      <SearchForm tours={tours} onFilter={setFilteredTours} />
      <TourList tours={filteredTours} />
    </>
  );
}
