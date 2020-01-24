import React from 'react';

const numbers = [1, 2, "drei", 4, 5, 6];


export const listItems =  numbers.map(
    (oneNumber, index) => <li key={index}>{oneNumber}</li>
);