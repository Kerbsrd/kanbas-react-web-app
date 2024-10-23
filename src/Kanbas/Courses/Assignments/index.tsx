import { FaGripVertical } from "react-icons/fa";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentButtons from "./AssignmentButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";


export default function Assignments() {
  const assignments = db.assignments;
  const { cid } = useParams();
  
  return (
    <div id="wd-assignments ">
      <AssignmentControls />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical className="me-2 fs-3" />ASSIGNMENTS
            <ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              
              .map((assignment) => (
                
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-dark text-decoration-none"><b className="wd-lesson-title ">{assignment.title}</b><br />
                  <div className="d-flex justify-content-between">
                    <AssignmentButtons />
                    <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until May 6 at 12:00 am</b> | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
                    <LessonControlButtons />
                  </div>
                  </Link>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}