import React from 'react';
import PropTypes from 'prop-types';
import { FileName } from './FileName';
import { CommitMessage } from './CommitMessage';
import { CommitTime } from './CommitTime';
export const FileListItem = ({ file }) => {
  return (
    <div className="container">
      <div className="row border">
        <FileName file={file} />
        <CommitMessage message={file.commit_message} />
        <CommitTime time={file.updated_at} />
      </div>
    </div>
  );
};
FileListItem.propTypes = {
  file: PropTypes.object
};
