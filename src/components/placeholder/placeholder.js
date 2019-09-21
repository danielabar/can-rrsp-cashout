import React from 'react';
import Icons from '../icons/icons';
import './placeholder.css';

function Placeholder() {
  return (
    <section className="placeholder">
      <img
        className="placeholder--image"
        src={Icons.treeswing}
        alt="Tree swing"
      />
      <p className="placeholder--text">Enter your data then click Calculate.</p>
    </section>
  );
}

export default Placeholder;
