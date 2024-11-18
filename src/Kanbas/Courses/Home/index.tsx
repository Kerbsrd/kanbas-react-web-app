import FacultyOnly from "../../Account/FacultyOnly";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td valign="top">
          <Modules />
        </td>
        <td valign="top" >
        <FacultyOnly>
          <CourseStatus />
          </FacultyOnly>
        </td>
      </tr>
    </table>
  );
}
