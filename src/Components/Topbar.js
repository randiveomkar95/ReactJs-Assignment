import React, {useState,useEffect} from "react";
import Navbar  from 'react-bootstrap/Navbar'
import { Container,Button,Modal,Form,Row,Col } from "react-bootstrap";

const Topbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function setData(){
    console.log({categoryName,categoryDescription,status});
    
    fetch('http://65.1.150.227:5000/api/Tests/add',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify({categoryName,categoryDescription,status})
    }).then ((result)=>{
        console.log("result",result)
    })
}
const[categoryName,setCategoryName] = useState("");
const[categoryDescription,setCategoryDescription]= useState("");
const [status,setStatus] =useState(1);

function setData(){
  console.log({categoryName,categoryDescription,status});
  let data={categoryName,categoryDescription,status}
  fetch('http://65.1.150.227:5000/api/Tests/add',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
      },
      body:JSON.stringify({categoryName,categoryDescription,status})
  }).then ((result)=>{
      console.log("result",result)
  })
}


  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand ><strong>My Courses</strong></Navbar.Brand>
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
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
                <div className="form-group col-md-12">
                <input type="text" className="form-control" name="categoryName"  value={categoryName} onChange={(e)=>{{setCategoryName(e.target.value)}}} placeholder="Enter Category Name"/> <br/><br/>
                </div>
                <div className="form-group col-md-12">       
                <input type="text" className="form-control cat-desc" name="categoryDescription"  value={categoryDescription} onChange={(e)=>{{setCategoryDescription(e.target.value)}}} placeholder="Enter Category Description"/> <br/><br/>
                </div>
                <div className="form-group col-md-12"> 
                <select name="status" className="form-control cat-desc" value={status} onChange={(e)=>{{setStatus(e.target.value)}}} >
                  <option value="">--- Select Staus ---</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>  
                <div className="form-group col-md-12 text-center"> 
                <button type="submit" className="btn btn-primary mt-4 col-md-4" onClick={setData}>Submit</button>
                </div>

        </div>

               
          

                
            </div>
   
        </Modal.Body>
   
      </Modal>
    
  
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
