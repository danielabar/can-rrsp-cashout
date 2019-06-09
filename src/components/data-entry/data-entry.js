/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import config from '../../config';
import {
  ageOptions,
  genderOptions,
  martialStatusOptions,
} from '../../lib/options';
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

function createMaritalStatusSelection() {
  return martialStatusOptions.map(opt => (
    <option key={opt.key} value={opt.value}>
      {opt.label}
    </option>
  ));
}

class DataEntry extends Component {
  state = {
    age: config.DEFAULT_AGE,
    gender: config.DEFAULT_GENDER,
    maritalStatus: config.DEFAULT_MARITAL_STATUS,
    income: config.DEFAULT_INCOME,
  };

  update = field => evt => {
    evt.preventDefault();
    this.setState({
      [field]: evt.target.value,
    });
  };

  render() {
    const { age, gender, maritalStatus, income } = this.state;
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

          <label htmlFor="selectMaritalStatus">
            Marital Status
            <select
              id="selectMaritalStatus"
              name="selectMaritalStatus"
              value={maritalStatus}
              onChange={this.update('maritalStatus')}
            >
              {createMaritalStatusSelection()}
            </select>
          </label>

          <label htmlFor="income">
            Annual Income
            <input
              id="income"
              type="number"
              name="income"
              value={income}
              onChange={this.update('income')}
              min={config.MIN_INCOME}
              max={config.MAX_INCOME}
            />
          </label>
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default DataEntry;
