import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal({ { list, onHide, onSave } }) {
  const [editedTitle, setEditedTitle] = useState(props.list.title);
  const [editedContent, setEditedContent] = useState(props.list.content);

  const handleSave = () => {
    props.onSave(props.list.id, editedTitle, editedContent);
    props.onHide();
  };
  return (
    <Modal
      show={list !== null}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
        <p />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [editedList, setEditedList] = useState(null);

  const handleEditedList = (id, title, content) => {
    setEditedList({ id, title, content });
    setModalShow(true);
  };

  const handleSaveList = (id, title, content) => {
    console.log(`Сохранение изменений в карточке с id ${id}:`);
    console.log(`Новый заголовок: ${title}`);
    console.log(`Новое содержание: ${content}`);
  };

  return (
    <>
      <Button variant="primary" onClick={() => handleEditedList(1, 'Название', 'Содержимое')}>
        Редактировать список
      </Button>
      <MyVerticallyCenteredModal
        list={editedList}
        onHide={() => setModalShow(false)}
        onSave={handleSaveList}
        // show={modalShow}
      />
    </>
  );
}
export default App;
// render(<App />);
