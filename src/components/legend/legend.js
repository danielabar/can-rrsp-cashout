import React from 'react';
import './legend.css';

function Legend() {
  return (
    <div className="legend">
      <div className="legend--symbol legend--symbol--before" />
      <div className="legend--label">Cashout Before</div>
      <div className="legend--symbol legend--symbol--after" />
      <div className="legend--label">Cashout After</div>
    </div>
  );
}

export default Legend;
