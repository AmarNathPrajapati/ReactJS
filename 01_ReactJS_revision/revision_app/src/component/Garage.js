import React from 'react'

const Garage = () => {
const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
        <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
      {cars.length < 0 ?
        <h2>
          You have {cars.length} cars in your garage.
        </h2>:
        <h2>
            you have no car in your garage.
        </h2>
      }
    </>
  )
}
export default Garage