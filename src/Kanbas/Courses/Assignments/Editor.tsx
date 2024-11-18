import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { addAssignment, updateAssignment } from "./reducer";
export default function AssignmentEditor() {
  const navigate = useNavigate();
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  console.log(cid, aid);
  console.log(typeof aid);
  const editing = aid !== "newassignment";

  //Load assignments, get assignment that was clicked....
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const currentAssignment = assignments.find((assignment: any) => assignment._id == aid); 
  console.log(typeof currentAssignment);
  console.log(currentAssignment);

  //Do not allow students
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const checkRole = () => {
    if (currentUser.role === "STUDENT") return navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  useEffect(() => { checkRole(); }, []);

  //For setting values
  const [_id, setAssignmentID] = useState("");
  const [title, setAssignmentTitle] = useState("");
  const [course, setAssignmentCourse] = useState("");
  const [description, setAssignmentDescription] = useState("");
  const [points, setAssignmentPoints] = useState(0);
  const [dueDate, setAssignmentDDate] = useState("");
  const [availableFrom, setAssignmentADate] = useState("");
  const [availableUntil, setAssignmentAUDate] = useState("");

  if (currentAssignment && _id === "") {
    setAssignmentID(currentAssignment._id);
    setAssignmentTitle(currentAssignment.title);
    setAssignmentDescription(currentAssignment.description);
    setAssignmentPoints(currentAssignment.points);
    setAssignmentDDate(currentAssignment.dueDate);
    setAssignmentADate(currentAssignment.availableFrom);
    setAssignmentAUDate(currentAssignment.availableUntil);
  };

  const save = () =>{
    const assignment = {_id, title, course, description, points, dueDate, availableFrom, availableUntil};
    assignment.course = cid!
    console.log({assignment})
    if(!editing){
      dispatch(addAssignment(assignment));
      console.log("New add")
    }
    else{
      dispatch(updateAssignment(assignment));
      console.log("updated ")
    }

  };
  return (
    <div id="wd-assignments-editor" > 
          <form className="float-end ">
            <div>
              <label htmlFor="wd-name">Assignment Name</label>
              <input id="wd-name" placeholder="Assignment Name" value={title} className="form-control border-dark mb-4 " 
              onChange={(e) => setAssignmentTitle(e.target.value)}/>
              <textarea id="wd-description" className="form-control border-dark" rows={10} onChange={(e) => setAssignmentDescription(e.target.value)}>
              {description}
              </textarea><br />
            </div>
            <div className="row m-2">
              <div className="col">
                <label htmlFor="wd-points" className="float-end">Points</label>
              </div>
              <div className="col">
                <input id="wd-points" placeholder="100" value={points} className="form-control mb-2 border-dark" 
                onChange={(e) => setAssignmentPoints(Number(e.target.value))}/>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="wd-group" className="float-end">Assignment Group</label>
              </div>
              <div className="col">
                <select id="wd-group" className="form-control mb-2 border-dark">
                  <option value="assignments"> ASSIGNMENTS</option>
                  <option value="quizzes"> QUIZZES</option>
                  <option value="exams"> EXAMS</option>
                  <option value="project"> PROJECT</option>
                </select>
              </div>
            </div>


            <div className="row">
              <div className="col">
                <label htmlFor="wd-display-grade-as" className="float-end">Display Grade as</label>
              </div>
              <div className="col">
                <select id="wd-display-grade-as" className="form-control mb-2 border-dark">
                  <option value="percentage">Percentage</option>
                  <option value="letter">Letter</option>
                  <option value="fraction">Fraction</option>
                </select>
              </div>
            </div>


            <div className="row">
              <div className="col">
                <label htmlFor="wd-submission-type" className="float-end">Submission Type</label>
              </div>
              <div className="col">
                <div className="border border-dark p-2 rounded-4">
                  <select id="wd-submission-type" className="form-control mb-2 border-dark">
                    <option value="online">Online</option>
                    <option value="paper">Paper</option>
                    <option value="verbal">Verbal</option>
                  </select>
                  <p>Online Entry Options</p>
                  <input type="checkbox" name="upload-text" id="wd-text-entry" className="form-check-input" />
                  <label htmlFor="wd-text-entry">Text Entry</label><br />
                  <input type="checkbox" name="upload-url" id="wd-website-url" className="form-check-input" />
                  <label htmlFor="wd-website-url">Website URL</label><br />
                  <input type="checkbox" name="upload-media" id="wd-media-recordings" className="form-check-input" />
                  <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                  <input type="checkbox" name="upload-annotation" id="wd-student-annotation" className="form-check-input" />
                  <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                  <input type="checkbox" name="upload-file" id="wd-file-upload" className="form-check-input" />
                  <label htmlFor="wd-file-upload" className="ml-2">File Uploads</label><br />
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
                  onChange={(e) => setAssignmentDDate(e.target.value)}/><br />
                  <div>
                    <div className="row">
                      <div className="col col-6">
                        <label htmlFor="wd-available-from">Available from</label>
                        <input type="date" id="wd-available-from" value={availableFrom} placeholder="2024-05-06" className="form-control" 
                        onChange={(e) => setAssignmentADate(e.target.value)}/>
                      </div>
                      <div className="col col-6">
                        <label htmlFor="wd-available-until">Until</label>
                        <input type="date" id="wd-available-until" value={availableUntil} placeholder="2024-05-20" className="form-control" 
                        onChange={(e) => setAssignmentAUDate(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="float-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}
                                            className="wd-dashboard-course-link text-decoration-none text-dark" >
              <button className="btn btn-l border-dark">Cancel</button>
              <button className="btn btn-l btn-danger border-dark m-3" onClick={save}>Save</button>
              </Link>
              
            </div>
          </form >
      
        </div>
  );
}


