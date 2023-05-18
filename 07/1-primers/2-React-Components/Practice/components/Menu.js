import React from 'react';
import Plain from './Plain';
import Pepperoni from './Pepperoni';
import MeatLover from './MeatLover';
import Veggie from './Veggie';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Plain/>
        <Pepperoni/>
        <MeatLover/>
        <Veggie/>
        
      </div>
    </div>
  );
}

module.exports = Menu;