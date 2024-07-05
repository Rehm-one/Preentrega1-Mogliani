import React from 'react';
import '../components/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='greeting'>
      {greeting}
    </div>
  );
};

export default ItemListContainer;
