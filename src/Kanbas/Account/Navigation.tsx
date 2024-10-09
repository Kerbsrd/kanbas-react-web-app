import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link id="wd-course-home-link" to="/Kanbas/Account/Signin" className="list-group-item active border border-0" > Signin  </Link> 
      <Link id="wd-course-home-link" to="/Kanbas/Account/Signup" className="list-group-item border border-0" > Signup  </Link> 
      <Link id="wd-course-home-link" to="/Kanbas/Account/Profile" className="list-group-item border border-0" > Profile </Link> 
    </div>
);}
