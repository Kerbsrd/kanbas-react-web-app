import { Routes, Route, Navigate } from "react-router";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useEffect, useState } from "react";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KanbasNavigation from "./Dashboard/Navigation";
import Courses from "./Courses";
import "./styles.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProtectedRoute from "./Account/ProtectedRoute";
import { addEnrollment } from "./Dashboard/reducer";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
 
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
});
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  
  return (
    <Session>
    <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3 flex ">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<ProtectedRoute><Dashboard courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/></ProtectedRoute>} />
              <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
    </div>
    </Session>
);}


