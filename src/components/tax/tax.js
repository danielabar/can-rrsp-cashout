import React from 'react';
import TaxIcon from './tax-icon';
import './tax.css';

function Tax() {
  return (
    <section className="tax">
      <div className="tax--header">
        <TaxIcon />
        <h2>What about taxes?</h2>
      </div>
      <p className="tax--body">
        The impact of receiving RRSPs while on GIS is a loss of least 50% of its
        value and perhaps 100% (i.e. all of it). If you cash out before 65, some
        of the RRSP may be taxed at 50% but only a small portion and only if
        your total taxable income exceeds roughly $150,000. If your RRSP is over
        $50,000 you may wish to cash it out over 3 or 4 years before you are 65
        to reduce the taxes you would pay on the withdrawal.
      </p>
    </section>
  );
}

export default Tax;
