import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((add,country)=> add + country.population, 0)
    //console.log(totalPopulation);
    
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation +=country.population;
        
    // }

    return (
        <div>
            <h2>This is cart: {cart.length}</h2>
            <p>total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;