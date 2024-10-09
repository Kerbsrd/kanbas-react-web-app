export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" >
      <form className="float-end ">
        <div>
          <label htmlFor="wd-name">Assignment Name</label>
          <input id="wd-name" value="A1 - ENV + HTML" className="form-control border-dark mb-4 " />
          <textarea id="wd-description" className="form-control border-dark" rows={10}>
            The assignment is available online. Links to an external site. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section. Links to each of the lab assignments. Link to the Kanbas application. Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
          </textarea><br />
        </div>

        <div className="row m-2">
          <div className="col">
            <label htmlFor="wd-points" className="float-end">Points</label>
          </div>
          <div className="col">
            <input id="wd-points" value={100} className="form-control mb-2 border-dark" />
          </div>
        </div>


        <div className="row">
          <div className="col">
            <label htmlFor="wd-group" className="float-end">Assignment Group</label>
          </div>
          <div className="col">
            <select id="wd-group" className="form-control mb-2 border-dark">
              <option value="assignments"> ASSIGNMENTS</option>
              <option value="quizzes"> QUIZZES</option>
              <option value="exams"> EXAMS</option>
              <option value="project"> PROJECT</option>
            </select>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <label htmlFor="wd-display-grade-as" className="float-end">Display Grade as</label>
          </div>
          <div className="col">
            <select id="wd-display-grade-as" className="form-control mb-2 border-dark">
              <option value="percentage">Percentage</option>
              <option value="letter">Letter</option>
              <option value="fraction">Fraction</option>
            </select>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <label htmlFor="wd-submission-type" className="float-end">Submission Type</label>
          </div>
          <div className="col">
          <div className="border border-dark p-2 rounded-4">
            <select id="wd-submission-type" className="form-control mb-2 border-dark">
              <option value="online">Online</option>
              <option value="paper">Paper</option>
              <option value="verbal">Verbal</option>
            </select>
            <p>Online Entry Options</p>
            <input type="checkbox" name="upload-text" id="wd-text-entry" className="form-check-input" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" name="upload-url" id="wd-website-url" className="form-check-input" />
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox" name="upload-media" id="wd-media-recordings" className="form-check-input" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" name="upload-annotation" id="wd-student-annotation" className="form-check-input" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox" name="upload-file" id="wd-file-upload" className="form-check-input" />
            <label htmlFor="wd-file-upload" className="ml-2">File Uploads</label><br />
          </div>
        </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <label htmlFor="wd-assign-to" className="float-end">Assign to:</label>
          </div>
          <div className="col">
          <div className="border border-dark p-2 rounded-4">
            <p><b>Assign To</b></p>
            <input id="wd-assign-to" value={"Everyone"} className="form-control mb-2" /><br />
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" id="wd-due-date" value="2024-05-13" className="form-control mb-2" /><br />
            <div>
            <div className="row">
              <div className="col col-6">
                <label htmlFor="wd-available-from">Available from</label>
                <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
              </div>
              <div className="col col-6">
                <label htmlFor="wd-available-until">Until</label>
                <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <hr />
        <div className="float-end">
          <button className="btn btn-l border-dark">Cancel</button>
          <button className="btn btn-l btn-danger border-dark m-3">Save</button>
        </div>
      </form >
      </div>


    /* <div id="wd-profile-screen">
        <h3>Profile</h3>
        <input id="wd-username" value="alice" placeholder="username" className="form-control mb-2" />
        <input id="wd-password" value="123" placeholder="password" type="password" className="form-control mb-2" />
        <input id="wd-firstname" value="Alice" placeholder="firstname" className="form-control mb-2" />
        <input id="wd-lastname" value="Wonderland" placeholder="lastname" className="form-control mb-2" />
        <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2" />
        <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2" />
        <select id="wd-role" className="form-control mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select><br />
        <Link id="wd-signout-btn" to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
      </div> */

      );
}

