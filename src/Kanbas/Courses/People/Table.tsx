import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div className="wd-main-content-offset p-3">
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>
                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Hannah</span>{" "}
                        <span className="wd-last-name">Marin</span></td>
                        <td className="wd-login-id">001232432S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2020-11-21</td>
                        <td className="wd-total-activity">12:09:27</td> </tr>
                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Caleb</span>{" "}
                        <span className="wd-last-name">Fish</span></td>
                        <td className="wd-login-id">0024576969I</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">INSTRUCTOR</td>
                        <td className="wd-last-activity">2024-08-03</td>
                        <td className="wd-total-activity">46:41:19</td> </tr>
                </tbody>
            </table>
        </div>
        </div>
        );
}