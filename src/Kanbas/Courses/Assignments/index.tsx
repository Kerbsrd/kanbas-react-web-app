import { FaGripVertical, FaTrash } from "react-icons/fa";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentButtons from "./AssignmentButtons";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch }
  from "react-redux";
import FacultyOnly from "../../Account/FacultyOnly";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentDeleteDialog from "./AssignmentDeleteDialog";
import { useState } from "react";

export default function Assignments() {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  console.log({ assignments })
  const dispatch = useDispatch();
  const { cid } = useParams();
  const [aid, setAid] = useState("");
  console.log(aid);
  return (
    <div id="wd-assignments ">
      <AssignmentControls />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical className="me-2 fs-3" />ASSIGNMENTS
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)

              .map((assignment: any) => (

                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex justify-content-between">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-dark text-decoration-none"><b className="wd-lesson-title ">{assignment.title}</b><br />
                      <AssignmentButtons />
                      <p className="wd-lesson-subtitle fs-6 "><span className="text-danger">Multiple Modules</span> | <b>Not Available until {assignment.availableFrom}</b> | <b>Due</b> {assignment.dueDate} | {assignment.points} pts</p>
                    </Link>
                    <div className="float-end">
                      <FacultyOnly>
                        <FaTrash className="text-danger me-2 mt-1 float-end" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" onClick={() => setAid(assignment._id)} />
                        <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                  Are you sure you want to delete this assignment? </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              <div className="modal-body">
                                <h1 className="modal-body fs-5" id="staticBackdropLabel">
                                  There is no going back. </h1>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                  Cancel </button>
                                <button onClick={() => dispatch(deleteAssignment(aid))} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                  Yes </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </FacultyOnly>
                      <GreenCheckmark />
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>

                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}