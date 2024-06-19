import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  let location = useLocation();
  let naviget = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scourse, setScourse] = useState([]);
   const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  let data = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
  const [record, setRecord] = useState(data);

  let courses = [
    "Html",
    "CSS",
    "Bootstrap",
    "JS",
    "React js",
    "Node js",
    "ASP.Net",
    "VB.Net",
    "PHP",
    "Angular js",
    "Vue js",
    "AI",
    "ML",
    "DataScience",
    "python",
  ];


  const handleCourses = (course, checked) => {
    let all = [...scourse];
    if (checked) {
      all.push(course);
    } else {
      all = all.filter((c) => c != course);
    }
    setScourse(all);
  };

  const handleSubmit = (h) => {
    h.preventDefault();

    if (!name || !password || !email || !date || !scourse || !status) {
      alert("All Fields are Compulsory...");
      return false;
    }

    let obj = {
      id: Date.now(),
      name,
      email,
      password,
      scourse,
      date,
      status
    };

    let newobj = [...record, obj];
    localStorage.setItem("users", JSON.stringify(newobj));
    setRecord(newobj);
    alert("Records are added...");
    naviget('/View')
    setName("");
    setEmail("");
    setPassword("");
    setScourse([]);
    setDate("");
    setStatus("");
  };

  return (
    <div className="py-5">
      <div className="container">
        <button className="btn btn-info text-white">
          <Link className="text-white text-decoration-none" to={"/View"}>
            View
          </Link>
        </button>
        <form
          className="bg-info text-white col-9 mx-auto border rounded p-5"
          onSubmit={handleSubmit}
        >
          {/* name  */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Full Name"
              onChange={(n) => setName(n.target.value)}
              value={name}
            />
          </div>
          {/* email  */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(n) => setEmail(n.target.value)}
              value={email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          {/* password */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(n) => setPassword(n.target.value)}
              value={password}
            />
          </div>
          {/* courses  */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label d-block">
              Courses
            </label>
            {courses.map((course) => {
              return (
                <div class="form-check d-inline-block me-3" key={course.id}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={(e) => handleCourses(course, e.target.checked)}

                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    {course}
                  </label>
                </div>
              );
            })}
          </div>
          {/* date */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          {/* status */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Status
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option>---select-Status---</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
