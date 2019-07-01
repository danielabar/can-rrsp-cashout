import React from 'react';

function helper(props) {
  const { data } = props;
  const { cashOutBefore, cashOutAfter } = data;
  if (cashOutBefore && cashOutAfter) {
    return (
      <div className="scenarios-data">
        <p>
          Total GIS if cash out RRSP BEFORE retirement:{' '}
          {cashOutBefore.totalGisInRetirement}
        </p>
        <p>
          Total GIS if cash out RRSP AFTER retirement:{' '}
          {cashOutAfter.totalGisInRetirement}
        </p>
      </div>
    );
  }
  return <div className="empty" />;
}

function Scenarios(props) {
  return <div className="scenarios">{helper(props)}</div>;
}

export default Scenarios;
