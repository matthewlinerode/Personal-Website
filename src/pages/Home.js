import pic from '../images/SeniorPhoto.jpg';
import githubLogo from '../images/github.png';
import '../App.css';
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Matthew Linerode | Home";
  }, []);
  return (
    <div className="Home">
      <header className="App-header">
      <div className="profile-container flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 px-4">
        <img src={pic} className="rounded-full" alt="Me!" />
        <div className="profile-text max-w-xl">
          <p className="text-left font-semibold text-3xl p-2 font-[georgia]">
            Hi, my name is Matthew Linerode!
          </p>
          <p className="text-left text-m p-2 font-serif">
            I recently graduated from Rose-Hulman Institute of Technology with a bachelor's degree in Computer Science and Software Engineering.
          </p>
          <p className="text-left text-m p-2 font-serif">
            I have a passion for learning as much as I can about the wide domain of computer science.
          </p>
          <p className="text-left text-m p-2 font-serif">
            Specifically, I am very passionate about software development, machine learning, and database management!
          </p>
          <p className="text-left text-m p-2 font-serif">
            Please take a look at the projects tab to see some of the projects that I have worked on!
          </p>
          <div>
            <a href="https://github.com/matthewlinerode">
              <img src={githubLogo} className="w-16 h-16" alt="GitHub Logo" />
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      </header>
    </div>
  );
}

export default Home;
