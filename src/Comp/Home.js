import React, { useContext, useState } from 'react'
import faker from '@faker-js/faker';
import SingleProduct from './SingleProduct';

faker.seed(100);
const Home = () => {

  // const {cart, setCart} = useContext(Cart);
  const productsArray = [...Array(30)].map(()=> ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }))
  const [products] = useState(productsArray);

  return (
    <div className='product_container'>
      {
        products.map((prod) => {
          return (
            <SingleProduct key={prod.id} prod={prod} />
          )
        })
      }
    </div>
  )
}

export default Home
