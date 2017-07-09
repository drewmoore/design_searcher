import React from 'react';

const PurchaseLink = ({ url, substrate }) => (
  <li>
    {url &&
      <a href={url} target="_blank" rel="noopener noreferrer">{substrate}</a>
    }
  </li>
);

export default PurchaseLink;
