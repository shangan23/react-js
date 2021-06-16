import React from 'react';
import ReactDOM from 'react-dom';

import { FileList } from './components/FileList';
const files = [
  {
    id: 1,
    type: 'folder',
    name: 'public',
    commit_message: 'Inital Commit',
    updated_at: '2020-11-10 12:30:40'
  },
  {
    id: 2,
    type: 'folder',
    name: 'src',
    commit_message: 'Inital Commit',
    updated_at: '2020-11-10 12:30:40'
  },
  {
    id: 3,
    type: 'file',
    name: 'README.md',
    commit_message: 'Updated ReadMe',
    updated_at: '2020-11-12 12:30:40'
  },
  {
    id: 4,
    type: 'file',
    name: 'package.json',
    commit_message: 'Inital Commit',
    updated_at: '2020-11-10 12:30:40'
  }
];

ReactDOM.render(<FileList files={files} />, document.getElementById('root'));