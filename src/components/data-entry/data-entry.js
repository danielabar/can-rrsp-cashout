/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import config from '../../config';
import { generateLabel } from '../../lib/form-text';
import {
  // martialStatusOptions,
  retirementAgeOptions,
  telLinkBuilder,
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

  // Required for radio buttons to display state change as user clicks
  handleMaritalStatusChange = changeEvent => {
    this.setState({
      maritalStatus: changeEvent.target.value,
    });
  };

  submitInput = event => {
    event.preventDefault();
    const { runScenarios } = this.props;
    runScenarios(this.state);
  };

  reset = event => {
    event.preventDefault();
    const { onReset } = this.props;
    this.setState({
      maritalStatus: config.DEFAULT_MARITAL_STATUS,
      rrsp: config.DEFAULT_RRSP,
      cpp: config.DEFAULT_ANNUAL_CPP,
      pension: config.DEFAULT_ANNUAL_PENSION,
      retirementAge: config.DEFAULT_RETIREMENT_AGE,
    });
    onReset();
  };

  render() {
    const { maritalStatus, rrsp, cpp, pension, retirementAge } = this.state;
    return (
      <div className="data-entry">
        <form
          onSubmit={this.submitInput}
          method="post"
          className="data-entry--form"
        >
          <div className="data-entry--marital">
            <div className="data-entry--heading">Select marital status</div>
            <span className="data-entry--hint">
              Used for GIS determination.
            </span>
            <div className="data-entry--radio-options">
              <label htmlFor="radioMaritalStatusSingle">
                <input
                  id="radioMaritalStatusSingle"
                  type="radio"
                  value="single"
                  checked={maritalStatus === 'single'}
                  onChange={this.handleMaritalStatusChange}
                  className="data-entry--radio"
                />
                <div className="data-entry--radio-box">
                  <span>Single, Widowed, or Divorced</span>
                </div>
              </label>
              <label htmlFor="radioMaritalStatusCouple">
                <input
                  id="radioMaritalStatusCouple"
                  type="radio"
                  value="couple"
                  checked={maritalStatus === 'couple'}
                  onChange={this.handleMaritalStatusChange}
                  className="data-entry--radio"
                />
                <div className="data-entry--radio-box">
                  <span>Married or Common law</span>
                </div>
              </label>
            </div>
          </div>

          <label className="data-entry-label" htmlFor="rrsp">
            {generateLabel('Total RRSP', maritalStatus)}
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
            {generateLabel('Annual CPP Entitlement', maritalStatus)}
            <span className="data-entry--hint">
              Contact Service Canada{' '}
              <a
                className="data-entry--hint-link"
                href={telLinkBuilder(config.SERVICE_CANADA_CONTACT)}
              >
                {config.SERVICE_CANADA_CONTACT}
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
            {generateLabel('Annual Pension', maritalStatus)}
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

          <div className="data-entry--button-container">
            <button
              type="submit"
              className="data-entry--button data-entry--primary"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={this.reset}
              className="data-entry--button data-entry--secondary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DataEntry;
