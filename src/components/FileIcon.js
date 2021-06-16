import React from 'react';
import PropTypes from 'prop-types';

export const FileIcon = ({ type }) => {
  if (type == 'folder') {
    return <i className="fa fa-folder p-2" style={{ color: '#79b8ff' }} />;
  } else {
    return <i className="fa fa-file p-2" style={{ color: '#959da5' }} />;
  }
};

FileIcon.propTypes = {
  type: PropTypes.string
};
