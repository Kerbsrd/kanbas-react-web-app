import { Route, Routes,  useLocation,  useParams } from "react-router";
import QuestionEditor from "./Questions/QuestEditor";
import QuizEditor from "./QuEditor";
import { Link } from "react-router-dom";
export default function QuizEditorFull() {
    const { cid, qid, quid } = useParams();
    const { pathname } = useLocation();
    return (
      <div className="border-dark">
    <ul className="nav nav-pills">
      <li className="nav nav-item">
      <Link className={`nav-link ${pathname.includes("Questions") ? "" : "active"}`} id="wd-QuizEditor" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}`}>
          Quiz Editor
        </Link>
      </li>
      <li className="nav nav-item">
        <Link className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`} id="wd-QuestionEditor" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`}>
          Question Editor
        </Link>
        </li>
        </ul>
        <Routes>
          <Route path={`Quizzes/${qid}/*`} element={<QuizEditor />} />
          <Route path={`${qid}/Questions`} element={<QuestionEditor />} />
        </Routes>
      </div>
    );
  }