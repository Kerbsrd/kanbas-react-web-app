import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import "./styles.css"
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Account", path: "/Kanbas/Account", icon: FaRegCircleUser },
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <>
      <div id="wd-kanbas-navigation" style={{ width: 110 }} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
        <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0">
          <img src="/images/neu.png" width="75px" /></a>
          
         {links.map((link) => ( <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
         ))}
      </div>
    </>
  );
}
