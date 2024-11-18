import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { FaGripVertical } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, editModule } from "./reducer";
export default function Modules() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");  
    return (
      <div>
        
  <ModulesControls setModuleName={setModuleName} moduleName={moduleName}  addModule={() => {
          dispatch(
            addModule({
              name: moduleName,
              course: cid,
            })
          );
          setModuleName("");
        }}/><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
  {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical className="me-2 fs-3" /> {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    value={module.name}
                  />
                )}
                
                <ModuleControlButtons
                  deleteModule={() => dispatch(deleteModule(module._id))}
                  moduleId={module._id}
                  editModule={() => dispatch(editModule(module._id))}
                />
                
                </div>
      {module.lessons && (

      <ul className="wd-lessons list-group rounded-0">
        {module.lessons.map((lesson: any) => (
        <li className="wd-lesson list-group-item p-3 ps-1">
          {lesson.name} 
          <LessonControlButtons />
          </li>
        ))}
      </ul>)}
    </li>))}
   
  </ul> 
  </div>

  );}

  
  