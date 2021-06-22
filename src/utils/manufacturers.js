import fetchManufacturers from "../actions/manufacturers";

export const filterManufacturers = (list, term) => {
  // Filter manufacturers array to only include those that include the search term, and return it
  return list.filter((manufacturer) =>
    manufacturer.name.toLowerCase().includes(term.toLowerCase())
  );
};

export const retrieveManufacturers = async () => {
  // Utilize the action fetchManufacturers to grab the data and assign it to manufacturers
  const manufacturers = await fetchManufacturers();

  // Return the complete list of manufacturers
  return manufacturers;
};

export const retrieveProducts = async (list, id) => {
  const singleManufacturer = list.filter((manufacturer) =>
    manufacturer.id.toString() === id.toString()
  )
  const products = singleManufacturer[0].products
  return products
}
