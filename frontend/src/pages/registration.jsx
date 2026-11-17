
import { useState } from "react";
import "./registration.css";

function Registration() {
  // Store student input values
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [courseName, setCourseName] = useState("");

  // Store registration message
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleRegister = (event) => {
    event.preventDefault();

    // Validate input fields
    if (!studentName || !studentId || !courseName) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Display success message
    setMessage(
      `Successfully registered ${studentName} for ${courseName}!`
    );

    // Clear input fields
    setStudentName("");
    setStudentId("");
    setCourseName("");
  };

  return (
    <div className="ucrs-container">
      <div className="ucrs-card">

        <h1>University Course Registration System</h1>

        <p className="subtitle">
          Register for your university courses
        </p>

        <form onSubmit={handleRegister}>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={studentName}
              onChange={(event) =>
                setStudentName(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Student ID</label>
            <input
              type="text"
              placeholder="Enter your student ID"
              value={studentId}
              onChange={(event) =>
                setStudentId(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Course Name</label>
            <select
              value={courseName}
              onChange={(event) =>
                setCourseName(event.target.value)
              }
            >
              <option value="">Select a course</option>
              <option value="Software Engineering">
                Software Engineering
              </option>
              <option value="Database Management">
                Database Management
              </option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Web Development">
                Web Development
              </option>
            </select>
          </div>

          <button type="submit">
            Register
          </button>

        </form>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}

export default Registration;