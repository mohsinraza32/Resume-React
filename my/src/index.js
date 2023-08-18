import React from "react";
import ReactDom from "react-dom";
import "./style.css";
function Hi() {
  return (

    <div>

      <h1>Cv_Resume for job profile</h1>
      <h2>Objective</h2>
      <p>I am Front-end developer with a basic knowlege of html , css , javaScript and React js.</p>

      <div className="main">

        <div>
          <h2>Name</h2>Mohsin Raza
          <h2>Father.Name</h2>Muhammad Raza
          <h2>Email Address</h2>mr.mohsinraza32@gmail.com
          <h2>Address</h2>Hussaini markazi imam bargha korangi no 2-1/2,korangi, karachi
          <h2>Mobile no</h2>03307086649
        </div>

        <div>
          <h2>Education</h2>
          <ol>
            <li>Matriculation from Al-seher-school in 2019</li>
            <li>Intermediate from Govt.college Aisha Bawani Shara -e- Faisal in 2021</li>
            <li>Bachlors in computer Science from Smiu University inprocess</li>
          </ol>
          <h2>Skills</h2>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>React js</li>
            <li>Git</li>
          </ul>
          <h2>Enterest</h2>
          <ol>
            <li>Contour Software</li>
            <li>Genetech Solution</li>
            <li>System Limited</li>
            <li>Freelancing</li>
          </ol>

        </div>
      </div>


    </div>

  );

}

ReactDom.render(<Hi />, document.querySelector('#root'));