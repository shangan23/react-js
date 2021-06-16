import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
export const CommitTime = ({ time }) => {
  const timeString = moment({ time }).fromNow();
  return <div className="col-md-3">{timeString}</div>;
};

CommitTime.propTypes = {
  time: PropTypes.string
};
