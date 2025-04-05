import React, {useEffect, useState} from "react";
import axios from "axios";


function Project() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/.netlify/functions/api/projects")
     .then((response) => {
      console.log("Project API data:", response.data);
      setProjects(response.data)
     })  
     .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects");
      });
  }, []);
  
    return (
      <div className="container mt-5">
        <h1 className="text-center">My Projects</h1>
        <p>
          Here are some of the projects I have worked on, showcasing my technical skills, problem-solving abilities, and creativity.
        </p>
        {error && <p className="alert alert-danger">{error}</p>}

        <div className="row">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="card my-3 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p>{project.description}</p>
                    <p><strong>Author:</strong> {project.author}</p>
                    <p><strong>Languages:</strong> {project.languages.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !error && <p>Loading projects...</p>
          )}
      </div>    
      </div>
    );
}

export default Project;
