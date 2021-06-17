import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const ControlledInput = () => {
  const firstName = useRef();
  const lastName = useRef();
  const [name, setName] = useState({ firstname: '', lastname: '' });

  const handleChange = () => {
    setName({
      firstname: firstName.current.value,
      lastname: lastName.current.value
    });
  };

  return (
    <div>
      <p>
        Hello {name.firstname} {name.lastname}
      </p>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          ref={firstName}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          name="lastname"
          placeholder="LastName"
          ref={lastName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<ControlledInput />, document.getElementById('root'));