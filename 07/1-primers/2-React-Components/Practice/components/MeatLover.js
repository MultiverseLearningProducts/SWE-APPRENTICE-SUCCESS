import React from 'react';
import meat from './images/plain.jpg';

function MeatLover() {
  return(
    <div className="MeatLover col-4">
      <div className="card">
        <img src={ meat } className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Plain Slice</h5>
          <p className="card-text">It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $10.00</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatLover;