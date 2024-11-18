// This file removes any features that should not be accessible by non-faculty members
//If a user is faculty, it will return child code
import { useSelector } from "react-redux";
export default function FacultyOnly({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "FACULTY") {
    return children;
  } else {
    return "";
}}
