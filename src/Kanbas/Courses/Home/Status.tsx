import { MdDoNotDisturbAlt, MdBarChart } from "react-icons/md";
import { FaCheckCircle, FaHome, FaBell  } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaBullhorn } from "react-icons/fa6";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "270px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-m btn-secondary w-100 mt-1 text-start ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <button className="btn btn-m btn-success w-90">
          <FaCheckCircle className="me-2 fs-5" /> Publish </button>
      </div>
      <button className="btn btn-m btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-m btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      <button className="btn btn-m btn-secondary w-100 mt-1 text-start" id="wd-choose-home">
        <FaHome className="me-2 fs-5" />Choose Home Page
      </button>
      <button className="btn btn-m btn-secondary w-100 mt-1 text-start" id="wd-view-screen" >
      <MdBarChart className="me-2 fs-5" /> View Course Screen
      </button>
      <button className="btn btn-m btn-secondary w-100 mt-1 text-start" id="wd-new-announcement" >
      <FaBullhorn className="me-2 fs-5" /> New Annoucement
      </button>
      <button className="btn btn-m btn-secondary w-100 mt-1 text-start" id="wd-new-analytics" >
      <MdBarChart className="me-2 fs-5" /> New Analytics
      </button>
      <button className="btn btn-m btn-secondary w-100 mt-1 text-start" id="wd-view-notifacations">
      <FaBell  className="me-2 fs-5" /> View Course Notifacations
      </button>
    </div>

  );
}



