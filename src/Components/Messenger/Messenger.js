import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import emailjs from 'emailjs-com';
import './Messenger.css'

const SERVICE_ID = 'service_iczzxjs';
const TEMPLATE_ID = 'template_pylh739';
const USER_ID = 'Y5lSOCntPPnDU1-3e';

const Messenger = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        alert('Message Sent Successfully');
      })
      .catch((error) => {
        alert('Oops, something went wrong: ' + error.text);
      });
    e.target.reset();
  };

  return (
    <div className="page-container">
      <div className="contact-form custom-input-field">
        <form onSubmit={handleOnSubmit}>
          <TextField
            id="form-input-control-email"
            label="Email"
            name="user_email"
            type="email"
            margin="normal"
            fullWidth
            required
            InputProps={{
              startAdornment: <i className="fas fa-envelope"></i>,
            }}
          />

          <TextField
            id="form-input-control-last-name"
            label="Name"
            name="user_name"
            type="text"
            margin="normal"
            fullWidth
            required
            InputProps={{
              startAdornment: <i className="fas fa-user-circle"></i>,
            }}
          />

          <TextField
            id="form-textarea-control-opinion"
            label="Message"
            placeholder="Type message here..."
            name="user_message"
            margin="normal"
            multiline
            rows={6}
            fullWidth
            required
            color="success"
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Messenger;
