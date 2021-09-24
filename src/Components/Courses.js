import React, { useState } from "react";
import CoursesApi from "../Api/CoursesApi";
import { Card,Button } from "react-bootstrap";


const Courses = () => {
    const [courseData, setCourseData] = useState(CoursesApi);
    return (
      <>
        <section>
          <div className="container">
           
            <div className="row">
              <select className="form-group col-md-2 mr-2">
                <option>Sort By</option>
              </select>

              <select className="form-group col-md-2 mr-2">
                <option>Types</option>
              </select>

              <select className="form-group col-md-2 mr-2">
                <option>Published</option>
              </select>

              <i class="fa-solid fa-arrow-rotate-left form-group col-md-2 mt-1"></i>
              {/* <i class="fa-solid fa-search form-group col-md-2 text-right"></i> */}
   
            </div>
            <div className="row">
              {courseData.map((curElem) => {
                const { id, img, title, discription,status } = curElem;
                return (
                  <>
                  <div className="col-md-3 mt-4">
                  <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="../img/tech.jpg" />
                    <Card.Body>
                      <Card.Title className="text-center">{title}</Card.Title>
                      <Card.Text>
                      {discription}
                      </Card.Text>
                      <hr/>
                      <Card.Title className="text-center">{status}</Card.Title>
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
