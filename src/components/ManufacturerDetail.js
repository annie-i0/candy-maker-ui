import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import {
    retrieveProducts,
    retrieveManufacturers,
  } from "../utils/manufacturers";


const ManufacturerDetail = () => {
    const {id} = useParams()
        const [manufacturerList, setManufacturerList] = useState([]);
        const [filteredProductsList, setFilteredProductsList] = useState([]);
      
        useEffect(() => {
          async function pullData() {
            const manufacturers = await retrieveManufacturers();
            setManufacturerList(manufacturers);
            const products = await retrieveProducts(manufacturers, id);
            setFilteredProductsList(products);
          }
          pullData();
        }, []); 
      
    return (
        <div>
            {filteredProductsList.map(product => (
                <p key={product.id}>
                    {`${product.name} (${product.yearIntroduced.substring(0,4)})`} 
                </p>
            ))}
        </div>
    )
}

export default ManufacturerDetail