import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function HelpModal({ handleShow, setShow, show }) {
  const handleClose = () => setShow(false);
  // lift show state up and pass the handleclose and handleshow functions from the help navbar on click
  // and the close modal buttons into their respective paths

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Need Help?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Installation:</h3>
        <p>Trying to add the bot to your server? Click <a href='https://discord.com/api/oauth2/authorize?client_id=1080643273749700719&permissions=8&scope=bot'>here!</a></p>
        <br />
        <h3>How to use:</h3>
        <ol>
          <li>Add the bot to your server</li>
          <li>Go to the <a href='https://emoji-lib.herokuapp.com/'>Library</a></li>
          <li>Select your desired emotes</li>
          <li>Click the import button</li>
          <li>Paste the command in your server</li>
        </ol>
        <p>The EmojiLib bot will let you know when your emojis are ready!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
