import React from 'react';
import './intro.css';

function Intro() {
  return (
    <div className="intro">
      <header className="intro--header">RRSP vs GIS Calculator</header>
      <ul className="intro--list">
        <li>Are you Canadian?</li>
        <li>Low income?</li>
        <li>Approaching retirement?</li>
        <li>Having savings in an RRSP?</li>
      </ul>
      <section className="intro--detail">
        If you answered yes to the above, withdrawing from your RRSP (Registered
        Retirement Savings Plan) during retirement could{' '}
        <span className="intro--emphasis intro--emphasis-negative">reduce</span>{' '}
        the amount of GIS (Guaranteed Income Supplement) you&apos;re entitled
        to. Use this calculator to find out if you could be eligible for{' '}
        <span className="intro--highlight">more GIS</span> by cashing out your
        RRSP before retiring.
      </section>
    </div>
  );
}

export default Intro;
