/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import config from '../../config';
import { ageOptions, genderOptions } from '../../lib/options';
import './data-entry.css';

function createAgeSelection() {
  return ageOptions.map(opt => (
    <option key={opt.key} value={opt.value}>
      {opt.label}
    </option>
  ));
}

function createGenderSelection() {
  return genderOptions.map(opt => (
    <option key={opt.key} value={opt.value}>
      {opt.label}
    </option>
  ));
}

class DataEntry extends Component {
  state = {
    age: config.DEFAULT_AGE,
    gender: config.DEFAULT_GENDER,
  };

  update = field => evt => {
    evt.preventDefault();
    this.setState({
      [field]: evt.target.value,
    });
  };

  render() {
    const { age, gender } = this.state;
    return (
      <div className="data-entry">
        <form>
          <label htmlFor="selectAge">
            Age
            <select
              id="selectAge"
              name="selectAge"
              value={age}
              onChange={this.update('age')}
            >
              {createAgeSelection()}
            </select>
          </label>

          <label htmlFor="selectGender">
            Gender
            <select
              id="selectGender"
              name="selectGender"
              value={gender}
              onChange={this.update('gender')}
            >
              {createGenderSelection()}
            </select>
          </label>
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default DataEntry;
