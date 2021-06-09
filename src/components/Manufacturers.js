/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Manufacturer from "./Manufacturer";
import Search from "./Search";
import {
  filterManufacturers,
  retrieveManufacturers,
} from "../utils/manufacturers";

const Manufacturers = () => {
  // Setup our states to be managed
  const [manufacturerList, setManufacturerList] = useState([]);
  const [filteredManufacturerList, setFilteredManufacturerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function pullData() {
      // Utilize our retrieveManufacturers util to get an array of all manufacturers
      const manufacturers = await retrieveManufacturers();

      // Now take the array that was returned and set it to state we are handling called ManufacturerList
      setManufacturerList(manufacturers);
      // Set our complete list as the filtered list as well, as this useEffect only runs when the page loads once
      setFilteredManufacturerList(manufacturers);
    }
    // This calls the data above, this is necessary because it needed to be async to utilize await
    pullData();
  }, []); // Due to the [] brackets as the 2nd param of useEffect this only runs ONCE, on page load

  useEffect(() => {
    // Pass our complete array of manufacturers and our search term to our filter util and receive a filtered array
    const filtered = filterManufacturers(manufacturerList, searchTerm);

    // Now that we have the filtered array, set that array to our state named filteredManufacturerList
    setFilteredManufacturerList(filtered);
  }, [searchTerm]); // Due to the [searchTerm] as the second param this useEffect runs every time searchTerm changes

  return (
    // Render a div to hold our entire component, JSX can only render 1 parent component (with many children)
    <div className="page">
      <div className="title">Candy Makers</div>
      {
        // This renders our search box and when it changes our searchTerm is also updated
        // with the setSearchTerm onChange effect. This is a component being rendered within
        // another component.
      }
      <Search term={searchTerm} setter={setSearchTerm} />
      {filteredManufacturerList.map((manufacturer) => (
        // For every manufacturer that is in the filtered list, a manufacturer component
        // is rendered. We pass in the key details to the component as props, and this
        // Manufacturer component takes these props to render the details.
        <Manufacturer
          key={manufacturer.id}
          id={manufacturer.id}
          name={manufacturer.name}
          country={manufacturer.country}
        />
      ))}
    </div>
  );
};

export default Manufacturers;
