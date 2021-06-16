import React from 'react';
import PropTypes from 'prop-types';
export const CommitMessage = ({ message }) => {
  return <div className="col-md-3">{message}</div>;
};
CommitMessage.propTypes = {
  message: PropTypes.string
};
