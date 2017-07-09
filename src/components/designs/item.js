import React from 'react';
import PurchaseLink from './purchase_link';

const DesignsItem = ({
  name, firstName, lastName, screenName, thumbnailUrl, description, numFavorites,
  fabricImageUrl, projectImageUrl, fabricUrl, wallpaperUrl, giftWrapUrl, tags
}) => (
  <article>
    <h4>{name}</h4>
    <div>
      <em>by {firstName} {lastName} </em>
      <span>
        <a
        href={`https://www.spoonflower.com/profiles/${screenName}`}
        target="_blank" rel="noopener noreferrer">
          {screenName}
        </a>
      </span>
    </div>
    <img src={thumbnailUrl} alt="Design Thumbnail" />
    <div data-num-favorites={numFavorites}>{numFavorites}</div>
    <p>{description}</p>
    {fabricImageUrl &&
      <img src={fabricImageUrl} alt="Design Fabric" />
    }
    {projectImageUrl &&
      <img src={projectImageUrl} alt="Design Project" />
    }
    <h5>Purchase as:</h5>
    <ul>
      <PurchaseLink url={fabricUrl}    substrate='Fabric' />
      <PurchaseLink url={wallpaperUrl} substrate='Wallpaper' />
      <PurchaseLink url={giftWrapUrl}  substrate='Gift Wrap' />
    </ul>
    <h5>Tags</h5>
    <ul>
      {tags.map(tag => (
        <li key={tag}><small>{tag}</small></li>
      ))}
    </ul>
    <hr />
  </article>
);

export default DesignsItem;
