// @flow
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import StatsField from "./StatsField";
import { statsFields } from "store";
import {
  syncStats,
} from "actions";

const propTypes = {

};

const defaultProps = {

};


class SetStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statsFields,
      search: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    const {
      syncStats,
      history: { action },
      location: { search },
    } = props;

    if (search !== state.search) {
      if (action === "POP") {
        syncStats(search);
      }

      return {
        search,
      };
    }

    return null;
  }

  render() {

    const {
      stats,
      match: { params: { lang = "en" } },
    } = this.props;

    const {
      statsFields,
    } = this.state;

    return (
      <div className="fluid">
        {statsFields.map((statsKey) => {
          const { [statsKey]: item } = stats;
          const { id } = item || {};
          const key = id || statsKey;
          return (
            <StatsField
              key={key}
              uid={id}
              item={item}
              lang={lang}
              statsKey={statsKey}
            />
          );
        })}
      </div>
    );
  }
}

SetStats.propTypes = propTypes;
SetStats.defaultProps = defaultProps;

const mapStateToProps = ({
  search,
  stats,
}) => {
  return {
    search,
    stats,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    syncStats: (search) => dispatch(syncStats(search)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetStats));