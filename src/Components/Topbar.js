import React, {useState,useEffect} from "react";
import Navbar  from 'react-bootstrap/Navbar'
import { Container,Button,Modal,Form,Row,Col } from "react-bootstrap";

const Topbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [data, setData] = useState([])
  const [formData, setFormData] = useState('')


  const saveCourse = () => {
    fetch('http://65.1.150.227:5000/api/Tests/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData, 
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    saveCourse() 
  }

  const handleChange = (event) => {
    setFormData(event.target.value)
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand >My Courses</Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
        Add Courses
      </Button>
         
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" name="categoryName" required placeholder="Enter Category Name" onChange = {handleChange} />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Category Description</Form.Label>
          <Form.Control type="text" name="categoryDescription" required placeholder="Category Description" onChange = {handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <select name="status" required className="form-control" onChange = {handleChange}>
            <option value="">--- Select Staus ---</option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </Form.Group>
        <Button variant="primary" onSubmit={handleSubmit} type="submit">
          Submit
        </Button>
      </Form>
        </Modal.Body>
   
      </Modal>
    
  
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
