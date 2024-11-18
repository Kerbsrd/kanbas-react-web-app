import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import FacultyOnly from "../../Account/FacultyOnly";
import { Link, useParams } from "react-router-dom";

export default function AssignmentControls() {
    const { cid } = useParams();
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <div className="d-flex mb-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="spyGlass"><HiMagnifyingGlass className="me-2 fs-5" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="spyGlass" />
                </div>
                <button className="btn btn-m btn-secondary w-50 mt-1 text-start ">
                    <FaPlus className="me-2 fs-5" /> Group </button>
                    <FacultyOnly>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments/newassignment`} className="text-dark text-decoration-none"><button className="btn btn-m btn-danger w-50 mt-1 text-start">
                    <FaPlus className="me-2 fs-5" /> Assignment </button>
                    </Link>
                    </FacultyOnly>
            </div>
        </div>
    );
}
