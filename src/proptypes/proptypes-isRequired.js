import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Comment({ author, message, likes }) {
  //console.log('Author', author);
  //console.log("Props", props)
  return (
    <div>
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="like">{likes > 0 ? likes : 'No '} Likes</div>
    </div>
  );
}
const author = 'Subbu';
const message = 'Thats sounds like a plan shankar!!';
const likes = 2;

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};

ReactDOM.render(
  <>
    <Comment author={author} message={message} likes={likes} /> <hr />
    <Comment author={author} likes={3} />
    <hr />
    <Comment likes={'NO LIKES'} />
  </>,
  document.getElementById('root')
);