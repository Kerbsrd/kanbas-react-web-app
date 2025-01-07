import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RoleOnly from "../../../Account/RoleOnly";
import { addQuestion, updateQuestion, deleteQuestion } from "./reducer";
export default function QuestionEditor({}: {
  
}) {
  const dispatch = useDispatch();
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { questions } = useSelector((state: any) => state.questionsReducer);
  const [questionEditorType, setQET] = useState("MULTI");
  const [currentQuestion, setCurrentQuestion] = useState();
  const [totalPoints, setTotalPoints] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
const calcTotals = () => {
    const quizQuestions = questions.filter((question: any) => question.quiz === qid)
    setQuestionCount(quizQuestions.length)
    const totalPoints = quizQuestions.reduce((accumulator: any, question: { points: any; }) => accumulator + question.points, 0);
    setTotalPoints(totalPoints)
}
useEffect(() => { calcTotals(); }, []);
  return (
    <div id="wd-question-editor" className=" d-flex float-start">
        <div id="wd-editor"  > 
      <h1 id="wd-questionEditor-title">Question Editor</h1> <hr />
      <RoleOnly  role={"FACULTY"} >
        <form>
      <h5>Create Question</h5>
         <select id="wd-new-question-type" defaultValue={"MULTI"} className="form-control mb-2 border-dark"
        //   onChange={(e) => setCourse({ ...course, name: e.target.value })}
        >
            <option value="MULTI">Multiple Choice</option>
            <option value="TF">True/False</option>
            <option value="BLANK">Fill in the Blank</option>
          </select> 
      <button className="btn btn-success">New Question</button>
      </form>
      </RoleOnly>
      <br />
      <hr />
      <h2 id="wd-dashboard-published "> Questions ({totalPoints} pts)</h2> <hr />
      <div id="wd-dashboard-courses" >
        {questions
          .filter((question: any) => question.quiz === qid)
          .map((question: any) => (
            <div className="wd-dashboard-course" style={{ width: "250px" }}>
              <div className="card rounded-3 p-3 m-3" style={{ minWidth: "500px" }}>
                <Link to={`/Kanbas/Courses/${question.course}/Quizzes/Questions/${question._id}`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {question.title} 
                      <p className="wd-points float-end">{question.points} pts</p> </h5> 
                      <hr/>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {question.qText} </p>
                      <p> Possible Choices: </p>
                      {(question.type === "TF" || question.type === "MULTI") && question.choices.map((choice: any) => {
                        return (
                            <div className="m-3">
                                
                            <p className="border border-gray rounded text-center">{choice}</p>
                            </div>
                        );
                    })}
                    {(question.type === "BLANK")  ? (
                            <div className="m-3">
                            <p className="border border-gray rounded text-center">Fill in the Blank</p>
                            </div>
                    ): null
                    }
                      <p> Correct Answer(s): </p>
                      {question.answer.map((answer: any) => {
                        return (
                            <div className="m-3">
                            <p className="border border-gray rounded text-center">{answer}</p>
                            </div>
                        );
                    })}
                    <RoleOnly  role={"FACULTY"} >
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteQuestion(question._id);
                      }}
                      className="btn btn-danger float-end">
                      Delete
                    </button>
                    <button id="wd-edit-course-click"
                    //   onClick={(event) => {
                    //     event.preventDefault();
                    //     setCourse(course);
                    //   }}
                      className="btn btn-warning me-2 float-end">
                      Edit
                    </button>
                    </RoleOnly>
                  </div>
                </Link>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}