import axios from "axios";

const fetchManufacturers = async () => {
  // Grab the data from the API and assign it to the variable data
  const { data } = await axios.get(`http://localhost:1337/api/manufacturers`); // eslint-disable-line no-undef

  // Return the data to the util that called this function
  return data;
};

export default fetchManufacturers