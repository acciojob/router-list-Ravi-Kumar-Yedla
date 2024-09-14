// src/components/ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items }) => {
  const { itemId } = useParams();
  const item = items.find(i => i.id === parseInt(itemId));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
