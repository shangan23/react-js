import React from 'react';
import PropTypes from 'prop-types';
import { FileIcon } from './FileIcon';
export const FileName = ({ file }) => {
  return (
    <div className="col-md-3">
      <FileIcon type={file.type} />
      {file.name}
    </div>
  );
};

FileName.propTypes = {
  file: PropTypes.object
};
