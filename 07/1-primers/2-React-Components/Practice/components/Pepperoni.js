import React from 'react';
import pepperoni from './images/plain.jpg';
// import './style.css';

function Pepperoni() {
  return(
    <div className="Pepperoni col-4">
      <div className="card">
        <img src={ pepperoni } className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Plain Slice</h5>
          <p className="card-text">It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $5.00</li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Pepperoni;