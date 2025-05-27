import pic from '../SeniorPhoto.jpg';
import '../App.css';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
      <div className="profile-container flex items-start space-x-6">
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
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      </header>
    </div>
  );
}

export default Home;
