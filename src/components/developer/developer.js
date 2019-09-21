import React from 'react';
import './developer.css';

function Developer() {
  return (
    <section className="developer">
      <h5 className="developer--header">
        Built by
        <a href="https://github.com/danielabar" className="developer--link">
          Daniela Baron
        </a>
        &copy; 2019
      </h5>
    </section>
  );
}

export default Developer;
