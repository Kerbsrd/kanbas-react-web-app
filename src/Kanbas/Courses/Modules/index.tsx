import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { FaGripVertical } from "react-icons/fa";

export default function Modules() {
    return (
      <div>
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical className="me-2 fs-3" />Week 1 
      <ModuleControlButtons /></div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          LEARNING OBJECTIVES 
          <LessonControlButtons />
          </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          Introduction to the course 
          <LessonControlButtons /></li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          Learn what is Web Development 
          <LessonControlButtons /></li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 
        <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 
        <LessonControlButtons />
        </li>
      </ul>
    </li>
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical /> Week 2 <ModuleControlButtons /></div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          LEARNING OBJECTIVES 
          <LessonControlButtons /></li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 
        <LessonControlButtons />
        </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 
        <LessonControlButtons />
        </li>
      </ul>
    </li>
  </ul> 
  </div>

  );}
  
  