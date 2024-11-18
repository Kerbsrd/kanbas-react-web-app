import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { useDispatch, useSelector } from "react-redux";
import FacultyOnly from "../Account/FacultyOnly";
import StudentOnly from "../Account/StudentOnly";
import { addEnrollment, deleteEnrollment } from "./reducer";
export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAll, toggleShowAll] = useState(true);
  const dispatch = useDispatch();

  function enrolled(courseId: string){
    return enrollments.some((enrollment: { user: string, course: string }) =>
        enrollment && enrollment.user === currentUser._id && enrollment.course === courseId);
  }
  function enroll(courseId: string){
    dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
  }

  function unenroll(courseId: string){
    dispatch(deleteEnrollment(enrollments
        .find((enrollment: { user: string, course: string }) => enrollment && enrollment.user === currentUser._id && enrollment.course === courseId)._id))
    }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <FacultyOnly>
      <h5>
        New Course
        <input value={course.name} className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}/>
        <textarea value={course.description} className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }/>
        <button className="btn btn-primary float-end m-1" 
        onClick={addNewCourse}>Add
        </button>
        <button className="btn btn-warning float-end m-1"
          onClick={updateCourse}>Update
        </button>
      </h5>
      </FacultyOnly>
      <StudentOnly>
      <button className="btn btn-primary float-end" onClick={() => toggleShowAll(!showAll)}>
                            Enrollments
                        </button>
      </StudentOnly>
      <br />
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols1 row-cols-md-5 g-4">
        {courses
          .map((course) => {
            if(showAll && !enrolled(course._id)){
              return <></>;
            } 
            return(
            <div className="wd-dashboard-course col" style={{ width: "250px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.imgPath} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                    <StudentOnly>
                    {enrolled(course._id) ?

                    <button className="btn btn-danger mx-2" onClick={(e) => {e.preventDefault();
                        unenroll(course._id);}}> Unenroll
                    </button>
                    :
                    <button className="btn btn-success mx-2" onClick={(e) => {e.preventDefault();
                        enroll(course._id);}}> Enroll
                    </button>
                      }
                    </StudentOnly>
                    <FacultyOnly>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end">
                      Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end">
                      Edit
                    </button>
                    </FacultyOnly>
                  </div>
                </Link>
              </div>
            </div>
            );
          })}

        </div>
        
      </div>
    </div>
  );
}

