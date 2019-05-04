import React, { Component } from 'react';
import './data-entry.css';

class DataEntry extends Component {
  state = {
    age: 55,
  };

  render() {
    const { age } = this.state;
    return (
      <form action="/foo">
        <label htmlFor="age">
          Age
          <input type="text" value={age} />
        </label>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default DataEntry;
