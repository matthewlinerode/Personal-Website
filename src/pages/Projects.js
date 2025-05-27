import '../App.css';
import { useEffect } from "react";

function Projects() {
    useEffect(() => {
    document.title = "Matthew Linerode | Projects";
  }, []);
  return (
    <div className="Projects">
      <header className="App-header">
      <div className="profile-container flex items-start space-x-6">
        <div className="profile-text max-w-xl">
          <p className="text-right font-semibold text-4xl p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      </header>
    </div>
  );
}

export default Projects;
