import { Link, useParams, useLocation } from "react-router-dom";
import "./../styles.css"
import Home from "./Home";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const {pathname} = useLocation(); 
  return (
    <div className="rounded-0 list-group wd" id="wd-courses-navigation">
      <Link
      className={`border-0 list-group-item ${pathname.includes("Home") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/Home`}>
        Home
      </Link>
      <Link
        className={`border-0 list-group-item ${pathname.includes("Modules") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/Modules`}>
        Modules
      </Link>
      <Link
        className={`border-0 list-group-item ${pathname.includes("Piazza") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/Piazza`}>
        Piazza
      </Link>
      <Link
        className={`border-0 list-group-item ${pathname.includes("Zoom") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/Zoom`}>
        Zoom
      </Link>
      <Link
        className={`border-0 list-group-item ${pathname.includes("Assignments") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/Assignments`}>
        Assignments
      </Link>
      <Link
        className={`border-0 list-group-item ${pathname.includes("Quizzes") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/Quizzes`}>
        Quizzes
      </Link>
      <Link
        className={`border-0 list-group-item ${pathname.includes("Grades") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/Grades`}>
        Grades
      </Link>
      <Link
        className={`border-0 list-group-item ${pathname.includes("People") ? "bg-white text-black active " : "text-danger"}`}
        to={`/Kanbas/Courses/${cid}/People`}>
        People
      </Link>
    </div>
  );
}
