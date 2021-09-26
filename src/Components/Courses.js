import React, { useState } from "react";
import CoursesApi from "../Api/CoursesApi";
import { Card,Button } from "react-bootstrap";


const Courses = () => {
    const [courseData, setCourseData] = useState(CoursesApi);
    return (
      <>
        <section className="course-filter">
        <div className="container course-filter ">

            <div className="row ">
              <select className="form-group col-md-2 mr-2 fil-style">
                <option>Sort By</option>
              </select>

              <select className="form-group col-md-2 mr-2 fil-style">
                <option>Types</option>
              </select>

              <select className="form-group col-md-2 mr-2fil-style ">
                <option>Published</option>
              </select>

              <i class="fa-solid fa-arrow-rotate-left form-group col-md-2 mt-2"></i>
   
   </div>
            </div>
            </section>
            <section className="service-main-container"> 
            <div className="container service-container">

            
            <div className="row">
              {courseData.map((curElem) => {
                const { id, img, title, discription,status } = curElem;
                return (
                  <>
                  <div className="col-md-3 mt-4">
                  <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img} className="course-img"/>
                   
                    <Card.Body>
                      <strong>{title}</strong>
                      <Card.Text className="desc-area">
                      {discription}
                      </Card.Text>
                     <hr className="hr-width"/>
                      <Card.Text className="text-center status-bar">{status}</Card.Text>
                    </Card.Body>
                  </Card>
                  </div>
                  </>
                );
              })}
            </div>
         </div>
        </section>
      </>
      


    );
  };

export default Courses;
