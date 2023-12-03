import { Select } from "antd";
import React from "react";

import { Option } from "antd/es/mentions";

function FilterProducts({ onFilterChange }) {
  const handleChange = (value) => {
    onFilterChange(value);
  };

  return (
    <div style={{display:"flex", justifyContent:"start", marginBottom:"1em"}}>
      <Select
        defaultValue="Filtrar"
        style={{ width: 150 }}
        onChange={handleChange}
      >
        <Option value="all">Todo</Option>
        <Option value="lowToHigh">Precio más bajo</Option>
        <Option value="highToLow">Precio más alto</Option>
        <Option value="stock">Disponible</Option>
      </Select>
      <Select
        defaultValue="Filtrar"
        
        style={{ width: 150, marginLeft:"10px"}}
        onChange={handleChange}
      >
        <Option value="top">Arriba</Option>
        <Option value="down">Abajo</Option>
      </Select>
      
    </div>
  );
}

export default FilterProducts;
