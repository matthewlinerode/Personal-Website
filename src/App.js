import pic from './SeniorPhoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="topnav bg-[#031645] text-white ">
        <div className="navbar-container flex justify-between">
          <p className="p-6 font-semibold text-white text-2xl tracking-widest">Matthew Linerode</p>
          <div className="flex justify-items">
            <a href="#projects" className="p-6 text-white text-xl">Projects</a>
            <a href="#contact" className="p-6 text-white text-xl">Contact</a>
          </div>
        </div>
      </div>
      <header className="App-header">
      <div className="profile-container flex items-start space-x-6">
        <img src={pic} className="seniorPhoto" alt="Me!" />
        <div className="profile-text max-w-xl">
          <p className="text-left font-semibold text-4xl p-2">
            Hi, my name is Matthew Linerode!
          </p>
          <p className="text-left text-m p-2">
            I recently graduated from Rose-Hulman Institute of Technology with a degree in Computer Science and Software Engineering.
          </p>
          <p className="text-left text-m p-2">
            I have a passion for learning as much as I can about the wide domain of computer science.
          </p>
          <p className="text-left text-m p-2">
            Specifically, I am very passionate about software development, machine learning, and database management!
          </p>
          <p className="text-left text-m p-2">
            Please take a look at the projects tab to see some of the projects that I have worked on!
          </p>
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      </header>
    </div>
  );
}

export default App;
