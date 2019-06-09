/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import config from '../../config';
import {
  ageOptions,
  genderOptions,
  martialStatusOptions,
  retirementAgeOptions,
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

function createRetirementAgeSelection() {
  return retirementAgeOptions.map(opt => (
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
    rrsp: config.DEFAULT_RRSP,
    cpp: config.DEFAULT_ANNUAL_CPP,
    pension: config.DEFAULT_ANNUAL_PENSION,
    retirementAge: config.DEFAULT_RETIREMENT_AGE,
  };

  update = field => evt => {
    evt.preventDefault();
    this.setState({
      [field]: evt.target.value,
    });
  };

  render() {
    const {
      age,
      gender,
      maritalStatus,
      income,
      rrsp,
      cpp,
      pension,
      retirementAge,
    } = this.state;
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

          <label htmlFor="rrsp">
            Annual RRSP
            <input
              id="rrsp"
              type="number"
              name="rrsp"
              value={rrsp}
              onChange={this.update('rrsp')}
              min={config.MIN_RRSP}
              max={config.MAX_RRSP}
            />
          </label>

          <label htmlFor="cpp">
            Annual CPP
            <input
              id="cpp"
              type="number"
              name="cpp"
              value={cpp}
              onChange={this.update('cpp')}
              min={config.MIN_ANNUAL_CPP}
              max={config.MAX_ANNUAL_CPP}
            />
          </label>

          <label htmlFor="pension">
            Annual Penison
            <input
              id="pension"
              type="number"
              name="pension"
              value={pension}
              onChange={this.update('pension')}
              min={config.MIN_ANNUAL_PENSION}
              max={config.MAX_ANNUAL_PENSION}
            />
          </label>

          <label htmlFor="selectRetirementAge">
            Retirement Age
            <select
              id="selectRetirementAge"
              name="selectRetirementAge"
              value={retirementAge}
              onChange={this.update('retirementAge')}
            >
              {createRetirementAgeSelection()}
            </select>
          </label>

          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default DataEntry;
