import React from 'react';
import Icons from '../icons/icons';
import './link-card.css';

function LinkCard(props) {
  const { linkUrl, linkTitle, linkBody, linkIcon } = props;
  return (
    <a href={linkUrl} className="link-card">
      <img className="link-card--icon" src={Icons[linkIcon]} alt="Link icon" />
      <div className="link-card--details">
        <h2 className="link-card--title">{linkTitle}</h2>
        <p className="link-card--body">{linkBody}</p>
      </div>
    </a>
  );
}

export default LinkCard;
