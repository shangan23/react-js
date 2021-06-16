import React from 'react'
import PropTypes from 'prop-types'
import { FileListItem } from './FileListItem'
export const FileList = ({ files }) => {
  return (
    <div className="container">
      <h2>GithubExample</h2>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </div>
  )
}
FileList.propTypes = {
  files: PropTypes.array,
}
