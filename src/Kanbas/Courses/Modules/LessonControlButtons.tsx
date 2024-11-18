import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import FacultyOnly from "../../Account/FacultyOnly";
import { deleteAssignment } from "../Assignments/reducer";
import { FaTrash } from "react-icons/fa";
export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <FacultyOnly>
      <FaTrash className="text-danger me-2 mb-1" />
        </FacultyOnly>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
