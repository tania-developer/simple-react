import React from 'react';

const Country = (props) => {
     
    const {name, population, flag, region} = props.country;
    const flagStyle = {border: '1px solid red', margin: '10px', padding: '20px'};

    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={flagStyle}>
            <h4>This is country: {name}</h4>
            <img style={{height:'50px'}} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>region: {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;