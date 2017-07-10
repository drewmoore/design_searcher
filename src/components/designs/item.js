import React from 'react';
import PurchaseLink from './purchase_link';

const DesignsItem = ({
  name, firstName, lastName, screenName, thumbnailUrl, description, numFavorites,
  fabricImageUrl, projectImageUrl, fabricUrl, wallpaperUrl, giftWrapUrl, tags
}) => (
  <article className="col-xs-12 col-sm-6 padded-frame">
    <div className="design-item">
      <div className="row">
        <div className="col-xs-9">
          <h4>{name}</h4>
        </div>
        <div className="col-xs-3 text-right matched-padding" data-num-favorites={numFavorites}>
          <span className="badge">{numFavorites}</span> <span className="glyphicon glyphicon-heart garnet" />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <em>
            by &nbsp;
            <a
            href={`https://www.spoonflower.com/profiles/${screenName}`}
            target="_blank" rel="noopener noreferrer">
              {firstName} {lastName}
            </a>
          </em>
        </div>
      </div>

      <p className="pad-top">{description}</p>

      <div className="row pad-top">
        <div className="col-xs-4">
          <img src={thumbnailUrl} alt="Design Thumbnail" className="fit-to-container" />
        </div>
        {fabricImageUrl &&
          <div className="col-xs-4">
            <img src={fabricImageUrl} alt="Design Fabric" className="fit-to-container" />
          </div>
        }
        {projectImageUrl &&
          <div className="col-xs-4">
            <img src={projectImageUrl} alt="Design Project" className="fit-to-container" />
          </div>
        }
      </div>

      <h5>Purchase as:</h5>
      <ul className="list-inline">
        <PurchaseLink url={fabricUrl}    substrate='Fabric' />
        <PurchaseLink url={wallpaperUrl} substrate='Wallpaper' />
        <PurchaseLink url={giftWrapUrl}  substrate='Gift Wrap' />
      </ul>

      <ul className="list-inline tags-list">
        {tags.map(tag => (
          <li key={tag}>
            <small>
              <a
                href={`https://www.spoonflower.com/tags/${tag}`}
                target="_blank" rel="noopener noreferrer"
              >
                {tag}
              </a>
            </small>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default DesignsItem;
