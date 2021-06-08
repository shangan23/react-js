import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function ContactDetails({ name, email, mobile }) {
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
}
/*class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, email, mobile } = this.props;
    return (
      <div>
        <h2>Contact Details</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Mobile: {mobile}</p>
      </div>
    );
  }
}*/

function MobileValidator(props, propName, ComponentName) {
  console.log('Mobile Validator', props, propName, ComponentName);
  if (props[propName].length < 10) {
    throw new Error('Mobile Number must be 10 digit long');
  }
}

ContactDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: MobileValidator
};

ReactDOM.render(
  <>
    <ContactDetails
      name={'Ramesh Pushparaj'}
      email={'ramesh.p@payoda.com'}
      mobile={'962955233'}
    />
    <hr />
  </>,
  document.getElementById('root')
);