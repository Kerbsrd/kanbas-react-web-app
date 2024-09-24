import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="https://i.pinimg.com/736x/1a/a1/a2/1aa1a29426cc3ee23669437dd3ee796e.jpg" width={200} />
                        <div>
                            <h5>
                                CS1235 React
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="https://burst.shopifycdn.com/photos/business-pug-working-on-laptop.jpg?width=1000&format=pjpg&exif=0&iptc=0" width={200} />
                        <div>
                            <h5>
                                IS4530 Information Science
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Information Analyst
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                ENG1384 English
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Reading
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="https://freerangestock.com/sample/40611/desktop-computer.jpg" width={200} />
                        <div>
                            <h5>
                                CRIM4040 Crime Prevention
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Policy Review
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="https://t4.ftcdn.net/jpg/02/36/62/99/360_F_236629968_cvZT3xpLsf26tuvcJOLaU8xIR1GfPrus.jpg" width={200} />
                        <div>
                            <h5>
                                CRIM2000 Principles of Law
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Lawyer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8e_xxTTG8bCZGdMfpJyxxQ6vgqFbvmC3Yww&s" width={200} />
                        <div>
                            <h5>
                                MATH4060 Calculus
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Mathmatician
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="https://t3.ftcdn.net/jpg/00/93/96/96/360_F_93969672_qYuLP5VhBcETsw2s5HFozdiqmaZa3H4k.jpg" width={200} />
                        <div>
                            <h5>
                                ART3770 Design Process
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Graphic Design
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="https://cdn.prod.website-files.com/661dc153b706dbb6ca6be504/663b222726c7f9b37d3c6d05_react.png" width={200} />
                        <div>
                            <h5>
                                HIST3000 Historical Research
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Historian
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

