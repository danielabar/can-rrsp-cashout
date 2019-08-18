import React from 'react';
import Warning from './warning';
import './disclaimer.css';

function Disclaimer() {
  return (
    <section className="disclaimer">
      <div className="disclaimer--header">
        <Warning />
        <h2>Disclaimer</h2>
      </div>
      <p className="disclaimer--body">
        The calculator’s results are rough estimates and are based on the
        information that you provided. The results should not be considered
        financial advice. Eligibility for GIS depends on all sources of income
        as reported on the income tax form. The calculations here assume that
        all sources of income not shown here are zero. It is also assumed that
        you are eligible for full Old Age Security (40 years in Canada) and will
        have no earned income after age 65. There may be GIS tops in addition
        depending on which province you live in.
      </p>
    </section>
  );
}

export default Disclaimer;
