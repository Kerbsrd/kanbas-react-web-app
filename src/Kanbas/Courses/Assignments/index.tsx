import { FaGripVertical } from "react-icons/fa";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentButtons from "./AssignmentButtons";


export default function Assignments() {
  return (
    <div id="wd-assignments ">
      <AssignmentControls />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical className="me-2 fs-3" />ASSIGNMENTS
            <ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-dark text-decoration-none"><b className="wd-lesson-title ">A1 - ENV + HTML</b><br /></a>
              <div className="d-flex justify-content-between">
              <AssignmentButtons />
              <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until May 6 at 12:00 am</b> | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
              <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-dark text-decoration-none"><b className="wd-lesson-title ">A2 - CSS + BOOTSTRAP</b><br /></a>
              <div className="d-flex justify-content-between">
              <AssignmentButtons />
              <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until May 13 at 12:00 am</b> | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
              <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-dark text-decoration-none"><b className="wd-lesson-title ">A3 - JAVASCRIPT</b><br /></a>
              <div className="d-flex justify-content-between">
              <AssignmentButtons />
              <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until May 13 at 12:00 am</b> | <b>Due</b> May 20 at 11:59pm | 100 pts</p>
              <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical /> Week 2 <ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-dark text-decoration-none"><b className="wd-lesson-title ">A4 - ABC + DEF</b><br /></a>
              <div className="d-flex justify-content-between">
              <AssignmentButtons />
              <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until May 20 at 12:00 am</b> | <b>Due</b> May 27 at 11:59pm | 100 pts</p>
              <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-dark text-decoration-none"><b className="wd-lesson-title ">A5 - HIJ + KL</b><br /></a>
              <div className="d-flex justify-content-between">
              <AssignmentButtons />
              <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until June 6 at 12:00 am</b> | <b>Due</b> June 13 at 11:59pm | 100 pts</p>
              <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-dark text-decoration-none"><b className="wd-lesson-title ">A6 - MNO + PQR</b><br /></a>
              <div className="d-flex justify-content-between">
              <AssignmentButtons />
              <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until June 13 at 12:00 am</b> | <b>Due</b> June 20 at 11:59pm | 100 pts</p>
              <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul> </div>
  );
}
