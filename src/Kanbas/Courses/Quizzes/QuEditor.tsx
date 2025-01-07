import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { addQuiz, updateQuiz } from "./reducer";
//TO DO: Fix submit/cancel routes, create tabs
export default function QuizEditor() {
  const navigate = useNavigate();
  const { cid, qid } = useParams();
  const dispatch = useDispatch();
  console.log(cid, qid);
  console.log(typeof qid);
  const editing = qid !== "newQuizz";
  //Load Quizs, get Quiz that was clicked....
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const currentQuiz = quizzes.find((quiz: any) => quiz._id == qid); 
  console.log(typeof currentQuiz);
  console.log(currentQuiz);
  //Do not allow students
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const checkRole = () => {
    if (currentUser.role === "STUDENT") return navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };
  useEffect(() => { checkRole(); }, []);
  //For setting values
  const [_id, setQuizID] = useState("");
  const [name, setQuizName] = useState("");
  const [course, setQuizCourse] = useState("");
  const [type, setQuizType] = useState("");
  const [instructions, setQuizInstructions] = useState("");
  const [points, setQuizPoints] = useState(0);
  const [dueDate, setQuizDDate] = useState("");
  const [availableFrom, setQuizADate] = useState("");
  const [availableUntil, setQuizAUDate] = useState("");
  const [time, setQuizTime] = useState(0);
  const [moreAttempts, setQuizAttempts] = useState(false);
  const [possibleAttempts, setQuizPossibleAttempts] = useState(0);
  const [showAnswers, setQuizAnswers] = useState("");
  const [questionDisplay, setQuizQuestionDisplay] = useState(false);
  const [questionLock, setQuizQuestionLock] = useState(false);
  const [lockDown, setQuizLockDown] = useState(false);
  const [shuffle, setQuizShuffle] = useState(true);
  const [accessCode, setQuizAccessCode] = useState("");
  const [published, setQuizPublished] = useState(false);
  const [group, setQuizGroup] = useState("");
  const save = () =>{
    const quiz = {_id, name, course, type, instructions, points, dueDate, availableFrom, availableUntil, time, moreAttempts, possibleAttempts, showAnswers,
      questionDisplay, questionLock, lockDown, shuffle, accessCode, published, group
    };
    quiz.course = cid!
    console.log({quiz})
    if(!editing){
      dispatch(addQuiz(quiz));
      console.log("New quiz added")
    }
    else{
      dispatch(updateQuiz(quiz));
      console.log("quiz updated ")
    }
  };
  const savePublish = () => {
    setQuizPublished(true);
    save();
  };
  if (currentQuiz && _id === "") {
    setQuizID(currentQuiz._id);
    setQuizName(currentQuiz.name);
    setQuizCourse(currentQuiz.course); 
    setQuizType(currentQuiz.type); 
    setQuizInstructions(currentQuiz.instructions);
    setQuizPoints(currentQuiz.points);
    setQuizDDate(currentQuiz.dueDate);
    setQuizADate(currentQuiz.availableFrom);
    setQuizAUDate(currentQuiz.availableUntil);
    setQuizTime(currentQuiz.time_limit); 
    setQuizAttempts(currentQuiz.moreAttempts); 
    setQuizPossibleAttempts(currentQuiz.possibleAttempts); 
    setQuizAnswers(currentQuiz.showAnswers);
    setQuizQuestionDisplay(currentQuiz.oneQuestionDisplay); 
    setQuizLockDown(currentQuiz.lockDown);
    setQuizShuffle(currentQuiz.shuffle); 
    setQuizAccessCode(currentQuiz.accessCode); 
    setQuizPublished(currentQuiz.published); 
    setQuizGroup(currentQuiz.assignmentGroup); 
  };
  
  return (
    <div id="wd-quiz-editor" className="float-start" > 
    <form className="w-100 ">
      <div>
        <label htmlFor="wd-name">Quiz Name</label>
        <input id="wd-name" placeholder="Unnamed Quiz" value={name} className="form-control border-dark mb-4 " 
        onChange={(e) => setQuizName(e.target.value)}/>
        <label htmlFor="wd-description">Quiz Instructions</label>
        <textarea id="wd-description" className="form-control border-dark" rows={10} onChange={(e) => setQuizInstructions(e.target.value)}>
        {instructions}
        </textarea><br />
      </div>
      <div className="row">
        <div className="col">
        <label htmlFor="wd-accessCode" className="float-end">Access Code</label>
        </div>
        <div className="col">
        <input id="wd-accessCode" placeholder="" value={accessCode} className="form-control border-dark mb-4 " 
        onChange={(e) => setQuizAccessCode(e.target.value)}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="wd-group" className="float-end">Assignment Group</label>
        </div>
        <div className="col">
          <select id="wd-group" className="form-control mb-2 border-dark" value={group} onChange={(e) => setQuizGroup(e.target.value)}>
            <option value="assignments"> ASSIGNMENTS</option>
            <option value="quizzes"> QUIZZES</option>
            <option value="exams"> EXAMS</option>
            <option value="project"> PROJECT</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="wd-showAnswers" className="float-end">Show Answers</label>
        </div>
        <div className="col">
          <select id="wd-showAnswers" className="form-control mb-2 border-dark" value={showAnswers} onChange={(e) => setQuizAnswers(e.target.value)}>
            <option value="CLOSED"> After Close</option>
            <option value="DUE"> After Due Date</option>
            <option value="SUBMIT"> After Submit</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="wd-quiz-type" className="float-end">Grading Type</label>
        </div>
        <div className="col">
          <select id="wd-quiz-type" className="form-control mb-2 border-dark" value={type} onChange={(e) => setQuizType(e.target.value)}>
            <option value="GRADED">Graded Quiz</option>
            <option value="PRACTICEQUIZ">Practice Quiz</option>
            <option value="GRADEDSURVEY">Graded Survey</option>
            <option value="UNGRADEDSURVEY">Ungraded Survey</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="wd-options" className="float-end">Quiz Options</label>
        </div>
        <div className="col">
          <div className="border border-dark p-2 rounded-4">
            <input type="checkbox" name="shuffle" id="shuffle" className="form-check-input" checked={shuffle} onChange={(e) => setQuizShuffle(!shuffle)}/>
            <label htmlFor="shuffle">Shuffle Questions</label><br />
            <input type="checkbox" name="oqaat" id="oqaat" className="form-check-input" checked={questionDisplay} onChange={(e) => setQuizQuestionDisplay(!questionDisplay)}/>
            <label htmlFor="oqaat">One Question at a Time</label><br />
            <input type="checkbox" name="lockdownBrowser" id="lockdownBrowser" className="form-check-input" checked={lockDown} onChange={(e) => setQuizLockDown(!lockDown)}/>
            <label htmlFor="lockdownBrowser" className="ml-2">Lockdown Browser</label><br />
            <input type="checkbox" name="lockQuestionsAfter" id="lockQuestionsAfter" className="form-check-input" checked={questionLock} onChange={(e) => setQuizQuestionLock(!questionLock)}/>
            <label htmlFor="lockQuestionsAfter">Lock Questions After</label><br />       
          </div>
        </div>
      </div>
      <div className="row  mt-2">
        <div className="col">
          <label htmlFor="wd-attemptOptions" className="float-end">Attempt Options</label>
        </div>
        <div className="col">
          <div className="border border-dark p-2 rounded-4">
            <input type="checkbox" name="multipleAttempts" id="multipleAttempts" className="form-check-input" checked={moreAttempts} onChange={(e) => setQuizAttempts(!moreAttempts)}/>
            <label htmlFor="multipleAttempts">Multiple Attempts</label><br />
            <label htmlFor="wd-possibleAttempts" className="float-start pt-3">Possible Attempts</label>
            <input id="wd-possibleAttempts" type="number" min={1} placeholder="1" value={possibleAttempts} className="form-control border-dark mb-4 " 
            onChange={(e) => setQuizPossibleAttempts(e.target.valueAsNumber)}/>
            </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <label htmlFor="wd-assign-to" className="float-end">Assign to:</label>
        </div>
        <div className="col">
          <div className="border border-dark p-2 rounded-4">
            <p><b>Assign To</b></p>
            <input id="wd-assign-to" value={"Everyone"} className="form-control mb-2" /><br />
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" id="wd-due-date" value={dueDate} placeholder="2024-05-13" className="form-control mb-2" 
              onChange={(e) => setQuizDDate(e.target.value)}/><br />
            <div>
              <div className="row">
                <div className="col col-6">
                  <label htmlFor="wd-available-from">Available from</label>
                  <input type="date" id="wd-available-from" value={availableFrom} placeholder="2024-05-06" className="form-control" 
                  onChange={(e) => setQuizADate(e.target.value)}/>
                </div>
                <div className="col col-6">
                  <label htmlFor="wd-available-until">Until</label>
                  <input type="date" id="wd-available-until" value={availableUntil} placeholder="2024-05-20" className="form-control" 
                  onChange={(e) => setQuizAUDate(e.target.value)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="float-end">
        {/* <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`} */}
      <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="wd-dashboard-course-link text-decoration-none text-dark" >
        <button className="btn btn-l border-dark">Cancel</button> 
        <button className="btn btn-l btn-danger border-dark m-3" onClick={save}>Save</button>
        <button className="btn btn-l btn-danger border-dark m-3" onClick={savePublish}>Save & Publish</button>
        </Link>
        
      </div>
    </form >
  </div>
  );
}
