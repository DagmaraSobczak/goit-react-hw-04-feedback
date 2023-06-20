import React from 'react';
import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => {
  return <>{message}</>;
};
NotificationMessage.propTypes = {
  message: PropTypes.string,
};
export default NotificationMessage;
