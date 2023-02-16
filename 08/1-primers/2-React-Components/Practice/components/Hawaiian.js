import React from 'react';
import hawaiian from './images/hawaiian.jpg';

function Hawaiian() {
  return(
    <div className="Hawaiian col-4">
      <div className="card">
        <img src={ hawaiian } className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Hawaiian Slice</h5>
          <p className="card-text">We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $2.00</li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Hawaiian;