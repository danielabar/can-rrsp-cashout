/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

import config from '../../config';
import {
  genderOptions,
  martialStatusOptions,
  retirementAgeOptions,
} from '../../lib/options';
import './data-entry.css';

function createSelection(opts) {
  return opts.map(opt => (
    <option key={opt.key} value={opt.value}>
      {opt.label}
    </option>
  ));
}

class DataEntry extends Component {
  state = {
    gender: config.DEFAULT_GENDER,
    maritalStatus: config.DEFAULT_MARITAL_STATUS,
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

  submitInput = event => {
    event.preventDefault();
    const { runScenarios } = this.props;
    runScenarios(this.state);
  };

  render() {
    const {
      gender,
      maritalStatus,
      rrsp,
      cpp,
      pension,
      retirementAge,
    } = this.state;
    return (
      <div className="data-entry">
        <form
          onSubmit={this.submitInput}
          method="post"
          className="data-entry--form"
        >
          <label className="data-entry-label" htmlFor="selectGender">
            Gender
            <span className="data-entry--hint">Used for life expectancy.</span>
            <select
              id="selectGender"
              name="selectGender"
              value={gender}
              onChange={this.update('gender')}
              className="data-entry-input data-entry--select"
            >
              {createSelection(genderOptions)}
            </select>
          </label>

          <label className="data-entry-label" htmlFor="selectMaritalStatus">
            Marital Status
            <span className="data-entry--hint">
              Only single supported for now.
            </span>
            <select
              id="selectMaritalStatus"
              name="selectMaritalStatus"
              value={maritalStatus}
              onChange={this.update('maritalStatus')}
              className="data-entry-input data-entry--select"
            >
              {createSelection(martialStatusOptions)}
            </select>
          </label>

          <label className="data-entry-label" htmlFor="rrsp">
            Total RRSP
            <span className="data-entry--hint">
              Total savings in RRSP accounts.
            </span>
            <div className="data-entry--input-wrapper data-entry--input-dollar">
              <input
                id="rrsp"
                type="number"
                name="rrsp"
                value={rrsp}
                onChange={this.update('rrsp')}
                min={config.MIN_RRSP}
                max={config.MAX_RRSP}
                className="data-entry-input"
              />
            </div>
          </label>

          <label className="data-entry-label" htmlFor="cpp">
            Annual CPP Entitlement
            <span className="data-entry--hint">
              Contact Service Canada{' '}
              <a className="data-entry--hint-link" href="tel:1-800-277-9914">
                1-800-277-9914
              </a>
              .
            </span>
            <div className="data-entry--input-wrapper data-entry--input-dollar">
              <input
                id="cpp"
                type="number"
                name="cpp"
                value={cpp}
                onChange={this.update('cpp')}
                min={config.MIN_ANNUAL_CPP}
                max={config.MAX_ANNUAL_CPP}
                className="data-entry-input"
              />
            </div>
          </label>

          <label className="data-entry-label" htmlFor="pension">
            Annual Pension
            <span className="data-entry--hint">
              Company or private pension.
            </span>
            <div className="data-entry--input-wrapper data-entry--input-dollar">
              <input
                id="pension"
                type="number"
                name="pension"
                value={pension}
                onChange={this.update('pension')}
                min={config.MIN_ANNUAL_PENSION}
                max={config.MAX_ANNUAL_PENSION}
                className="data-entry-input"
              />
            </div>
          </label>

          <label className="data-entry-label" htmlFor="selectRetirementAge">
            Retirement Age
            <span className="data-entry--hint">Planned retirement age.</span>
            <select
              id="selectRetirementAge"
              name="selectRetirementAge"
              value={retirementAge}
              onChange={this.update('retirementAge')}
              className="data-entry-input data-entry--select"
            >
              {createSelection(retirementAgeOptions)}
            </select>
          </label>

          <button type="submit" className="data-entry-submit">
            Calculate
          </button>
        </form>
      </div>
    );
  }
}

export default DataEntry;
