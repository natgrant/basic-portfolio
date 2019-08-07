import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";

class App extends Component {
  // Initialize state
  state = { projects: [] };

  // On load
  componentDidMount() {
    this.getProjects();
  }

  // Set state with our projects
  getProjects = () => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  };

  render() {
    const { projects } = this.state;

    return (
      <div className="App">
        <h1>Hi, my name is Nat Grant</h1>
        <h3>I'm a developer</h3>

        <h4>Here are a few of my projects</h4>

        {projects.length ? (
          projects.map((project, index) => (
            <div key={project.name}>
              <Button
                variant="outlined"
                color="secondary"
                href={project.html_url}
              >
                {project.name}
              </Button>
              <p>
                <i>{project.description}</i>
              </p>
            </div>
          ))
        ) : (
          <div>I don't have any projects</div>
        )}
      </div>
    );
  }
}

export default App;
