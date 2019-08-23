import React from 'react';
import LinkCard from './link-card';
import './links.css';

function buildLinkCards(learnMoreLinks) {
  return learnMoreLinks.map(lml => (
    <LinkCard
      key={lml.linkTitle}
      linkUrl={lml.linkUrl}
      linkTitle={lml.linkTitle}
      linkBody={lml.linkBody}
      linkIcon={lml.linkIcon}
    />
  ));
}

function Links(props) {
  const { learnMoreLinks } = props;
  return <section className="links">{buildLinkCards(learnMoreLinks)}</section>;
}

export default Links;
