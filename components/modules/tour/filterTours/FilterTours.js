"use client";

import { useState, useEffect } from "react";
import SearchForm from "../../searchForm/SearchForm";
import TourList from "../toursList/ToursList";

export default function FilterTours({ tours }) {
  const [filteredTours, setFilteredTours] = useState(tours);

  useEffect(() => {
    setFilteredTours(tours);
  }, [tours]);

  return (
    <>
      <SearchForm tours={tours} onFilter={setFilteredTours} />
      <TourList tours={filteredTours} />
    </>
  );
}
