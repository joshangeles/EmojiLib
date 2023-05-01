import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function HelpModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
    </>
  );
}
