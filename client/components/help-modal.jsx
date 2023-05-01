import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function HelpModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Need Help?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Installation:</h3>
          <p>Trying to add the bot to your server? Click <a href='https://discord.com/api/oauth2/authorize?client_id=1074898581758148729&permissions=8&scope=bot'>here!</a></p>
          <br />
          <h3>How to use:</h3>
          <p>
            After adding the bot to your server, go to the <a href='https://emoji-lib.herokuapp.com/'>Library</a>
            and select your emojis! (They will highlight white when selected)
            After, click the import button and the command for the emojis will be added to your clipboard.
            Finally, simply copy-and-paste the command in a channel the bot can see, and send! The bot will tell you when your emojis are imported!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
