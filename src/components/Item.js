import React from "react";


const Item = ({name, img, desc, price}) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {desc}</p>
    </div>
  );
};

export default Item;
