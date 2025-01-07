import { FaGripVertical, FaPlus, FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch }
  from "react-redux";
import RoleOnly from "../../Account/RoleOnly";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {deleteQuiz } from "./reducer";

export default function Quizzes() {
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  console.log({ quizzes })
  const dispatch = useDispatch();
  const { cid } = useParams();
  const [qid, setQid] = useState("");
  console.log(qid);
  
  const checkAvailability = (aDate: string, uDate: string) => {
    const currentTime = new Date();
    const until = new Date(uDate);
    const available = new Date(aDate);
    if (available > currentTime) {
        return `Not available until ${aDate}`;
    }
    else if (until < currentTime) {
        return `Closed`;
    }
    else {
        return `Available until ${uDate}`;
    }
  };

  return (
    <div id="wd-assignment-quizz ">
         <div id="wd-quizzes" className="text-nowrap">
            <div className="d-flex mb-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spyGlass"><HiMagnifyingGlass className="me-2 fs-5" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="spyGlass" />
                
                    <RoleOnly  role={"FACULTY"} >
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/newQuizz`} className="text-dark text-decoration-none"><button className="btn btn-m btn-danger w-100 mt-1 text-start">
                    <FaPlus className="me-2 fs-5" /> Add Quizz </button>
                    </Link>
                    </RoleOnly>
                    </div>
            </div>
        </div>
      <ul id="wd-lessons" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> <FaGripVertical className="me-2 fs-3" />ASSIGNMENT QUIZZES
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {quizzes
              .filter((quiz: any) => quiz.course === cid)

              .map((quiz: any) => (

                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex justify-content-between">
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} className="text-dark text-decoration-none"><b className="wd-lesson-title ">{quiz.name}</b><br />
                      <p className="wd-lesson-subtitle fs-6 "><b>{checkAvailability(quiz.availableFrom,quiz.availableUntil)}</b> | <b>Due</b> {quiz.dueDate} | {quiz.points} pts | {quiz.questionCount} Questions</p>
                    </Link>
                    <div className="float-end">
                    <RoleOnly  role={"FACULTY"} >
                        <FaTrash className="text-danger me-2 mt-1 float-end" data-bs-toggle="modal" data-bs-target="#wd-delete-quiz-dialog" onClick={() => setQid(quiz._id)} />
                        <div id="wd-delete-quiz-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                  Are you sure you want to delete this quiz? </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              <div className="modal-body">
                                <h1 className="modal-body fs-5" id="staticBackdropLabel">
                                  There is no going back. </h1>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                  Cancel </button>
                                  <button onClick={() => dispatch(deleteQuiz(qid))} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                  Yes </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </RoleOnly>
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