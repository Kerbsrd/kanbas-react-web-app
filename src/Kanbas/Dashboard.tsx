import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="https://i.pinimg.com/736x/1a/a1/a2/1aa1a29426cc3ee23669437dd3ee796e.jpg" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1235 React
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Back End Software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="https://burst.shopifycdn.com/photos/business-pug-working-on-laptop.jpg?width=1000&format=pjpg&exif=0&iptc=0" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        IS4530 Information Science
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Information Analyst Intern
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ENG1384 English
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Journalism and Writing Stories
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="https://freerangestock.com/sample/40611/desktop-computer.jpg" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CRIM4040 Crime Prevention
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Policy and Crime Review
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="https://t4.ftcdn.net/jpg/02/36/62/99/360_F_236629968_cvZT3xpLsf26tuvcJOLaU8xIR1GfPrus.jpg" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CRIM2000 Principles of Law
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Ammendments and Bills
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8e_xxTTG8bCZGdMfpJyxxQ6vgqFbvmC3Yww&s" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH4060 Calculus
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                       Higher Level Complex Mathmatics
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="https://t3.ftcdn.net/jpg/00/93/96/96/360_F_93969672_qYuLP5VhBcETsw2s5HFozdiqmaZa3H4k.jpg" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        ART3770 Design Process
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Graphic and Digital Design
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="https://cdn.prod.website-files.com/661dc153b706dbb6ca6be504/663b222726c7f9b37d3c6d05_react.png" width={"100%"} height={160} />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        HIST3000 Historical Research
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Historical Investigations
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

