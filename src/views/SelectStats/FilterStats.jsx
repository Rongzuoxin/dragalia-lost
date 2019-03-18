// @flow
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { Select } from "components";
import {
  selectFilters,
  selectFocus,
} from "actions";

const propTypes = {
  fields: PropTypes.array.isRequired,
};

class FilterStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapon: ["", "Sword", "Blade", "Dagger", "Axe", "Lance", "Bow", "Wand", "Staff"],
      element: ["", "Flame", "Water", "Wind", "Light", "Shadow"],
      rarity: ["", "5", "4", "3"],
      tier: ["", "3", "2", "1"],
    };
  }

  render() {
    const {
      fields,
      filters,
      selectFocus,
    } = this.props;

    return (
      <div className="filters">
        {fields.map((field) => (
          <div key={field} className="filter-select">
            <Select
              label={field}
              value={filters[field]}
              options={this.state[field]}
              onChange={this.onChange}
            />
          </div>
        ))}

        <div className="filter-select">
          <Button
            variant="contained"
            className="fluid button"
            onClick={this.onClick}
          >
            Reset
           </Button>
        </div>
      </div>
    );
  }

  onChange = ({ target: { name, value } }) => {
    this.props.selectFilters(name, value);
  }

  onClick = () => {
    this.props.selectFocus("halidom");
  }
}

FilterStats.propTypes = propTypes;

const mapStateToProps = ({ filters }) => {
  return {
    filters,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectFilters: (key, value) => dispatch(selectFilters(key, value)),
    selectFocus: (statsKey) => dispatch(selectFocus(statsKey)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterStats);