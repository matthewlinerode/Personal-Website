import '../App.css';
import { useEffect } from "react";
import cMatrix from '../images/cMatrix.png';
import recipe3 from '../images/recipe3.PNG';
import erDiagram from '../images/erDiagram.PNG';
import reactImg from '../images/react.png';
import tailwindImg from '../images/tailwind.png';
import jacocoImg from '../images/jacoco.webp';
import junitImg from '../images/junit.png';
import cucumberImg from '../images/cucumber.svg';
import pitestImg from '../images/pitest.png';
import gradleImg from '../images/gradle.png';
import codeSmells from '../images/codeSmells.PNG';
import linuxImg from '../images/linux.png';
import pthreadImg from '../images/pthread.png';

function Projects() {
    useEffect(() => {
    document.title = "Matthew Linerode | Projects";
  }, []);
  return (
    <div className="Projects">
      <header className="Projects-header p-8">
        <div className="bg-white rounded-lg p-4 md:p-6 m-2 w-full max-w-[800px] shadow-md mx-auto text-black">
            <p className="font-semibold text-4xl p-4">
                Image Recognition Project
            </p>
            <p className="text-justify text-m p-2 font-serif">
              This project used various Convolutional Neural Network (CNN) and Support Vector Machines (SVM) models to classify images of American Sign Language letters using a dataset of around 97,000 images found on Kaggle. Varying degrees of features were extracted from 7x7 squares of the image and used to train an SVM, with the best model achieving a 43.3% test accuracy. Running a transfer learning CNN model using the VGC16 network scored the highest, achieving a 98% test accuracy.
            </p>
            <div className="flex items-center justify-center">
                <img src={cMatrix} className="rounded-lg align-middle" alt="Confusion Matrix" />
            </div>
            <p className="text-middle p-2 font-serif">
                Above is the confusion matrix for the best performing model on the test set, consisting of 1,000 images per class. 
            </p>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 m-2 w-full max-w-[800px] shadow-md mx-auto text-black">
            <p className="font-semibold text-4xl p-4">
                Senior Capstone Project
            </p>
            <p className="text-justify text-m p-2 font-serif">
                Me and my team worked with a biomedical company to create "recipes" that solved various computer vision problems involving their labware. We utilized the open-source software KNIME to create these workflows, allowing us to create custom Python scripting nodes which included various calls to the OpenCV library. A large constraint on our project was to make these workflows easy to alter and build off of as the intended users were expected to have little knowledge of programming, so each node has various parameters that can be configured, as well as changing the ordering of the original workflow should work with no problems. Each workflow takes in a CSV file with information to solve a specific problem, and an output CSV file containing the answer, as well as the name of the image file. A document was also created to accompany this project. In it details installation instructions, as well as detailing each of the nodes used, and giving recommended values for every parameter.
            </p>
            <div className="flex items-center justify-center">
                <img src={recipe3} className="rounded-lg align-middle" alt="Recipe 3" />
            </div>
            <p className="text-middle p-2 font-serif">
                Above is the workflow for Recipe 3, which detects if all test tubes in the image have their caps on or not.
            </p>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 m-2 w-full max-w-[800px] shadow-md mx-auto text-black">
            <p className="font-semibold text-4xl p-4">
                Database Systems Project
            </p>
            <p className="text-justify text-m p-2 font-serif">
                This project had a largely incremental nature. We decided to build a database around storing fantasy sports stats for Football, Basketball, and Baseball. We first designed an ER diagram with our inital idea of the relationships between the different entities, and over the course of the quarter needed to implement different concepts that we covered in class, like adding additional views, creating multiple stored procedures, and securely storing user information by salting and hashing passwords for example. We used Microsoft SQL Server for our backend, and Spring for our frontend. After adding additional functionalities to make our application more helpful, we created the below ER diagram detailing our final database schema.
            </p>
            <div className="flex items-center justify-center">
                <img src={erDiagram} className="rounded-lg align-middle" alt="ER Diagram" />
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 m-2 w-full max-w-[800px] shadow-md mx-auto text-black">
            <p className="font-semibold text-4xl p-4">
                Personal Website
            </p>
            <p className="text-justify text-m p-2 font-serif">
                This is a personal project that you are looking at right now! I created this website using React and Tailwind CSS to showcase some of my more relevant projects I've done during my 4 years at Rose-Hulman and beyond. This website was deployed using GitHub Pages, with the source code available on my GitHub repo listed on the home page. I used React as I wanted more experience with frontend frameworks, and since the React Router would allow for easy navigation between the different pages, and learned Tailwind CSS to change styles easier than with regular CSS.
            </p>
            <div className="grid grid-cols-2 justify-items-center">
                <div className="flex items-center justify-center">
                    <img src={reactImg} className="scale-50 align-middle" alt="React logo" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={tailwindImg} className="scale-50 align-middle" alt="Tailwind CSS Logo" />
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 m-2 w-full max-w-[800px] shadow-md mx-auto text-black">
            <p className="font-semibold text-4xl p-4">
                Software Quality Assurance Project
            </p>
            <p className="text-justify text-m p-2 font-serif">
                This project was a group project where we were tasked with creating an application to play the board game "Risk", but following the principles we were learning in class. We set up GitHub Actions and used Gradle to allow for Continuous Integration and Continuous Deployment (CI/CD) of our application. We utilized two different linters, SpotBugs, and Checkstyle to ensure code standards. We were tasked with applying Test-Driven Development (TDD) for each of the features we were implementing, so we set up branch protection rules to ensure that each feature branch had pull requests that were reviewed by another team member, and that all code was ran through the linters before merging into the main branch. We used JUnit to write unit tests for our code, using Boundary Value Analysis (BVA) to ensure that our tests were covering all edge cases. We were also tasked to write integration tests using Behavior-Driven Development (BDD) principles, so we used Cucumber to write these tests. We used JacoCo to ensure that our code coverage was above 90%, and Pitest to ensure a high mutation coverage.
            </p>
             <div className="grid grid-cols-5 justify-items-center">
                <div className="flex items-center justify-center">
                    <img src={gradleImg} className="scale-50 align-middle" alt="React logo" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={junitImg} className="scale-50 align-middle" alt="Junit5 Logo" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={cucumberImg} className="scale-50 align-middle" alt="React logo" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={pitestImg} className="scale-50 align-middle" alt="React logo" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={jacocoImg} className="scale-50 align-middle" alt="JaCoCo logo" />
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 m-2 w-full max-w-[800px] shadow-md mx-auto text-black">
            <p className="font-semibold text-4xl p-4">
                Software Construction and Evolution Project
            </p>
            <p className="text-justify text-m p-2 font-serif">
                Similar to the previous project, this one also had us working on a program to play Risk. My group and I were tasked with taking a project we completed in a previous course and look for any obvious bad code smells as detailed from the Michael Feathers book "Working Effectively with Legacy Code". We were tasked with refactoring the code to remove these smells, and to add additional functionality to the program. We focused on the addition of the three other main Risk game modes, and allowing for users to create their own custom maps to play on. We similarly looked over our rather large test suite for any bad test smells and refactored those as well. Using JaCoCo, we ensured that our code coverage was above 90%, but removed Pitest as it greatly increased the build time of the project and was not required for this project. For our last milestone, we were tasked with creating various documentation, which included Software Development Documents, User Documents, and our Test Plan. 
            </p>
            <div className="flex items-center justify-center">
                <img src={codeSmells} className="rounded-lg align-middle" alt="List of Code Smells" />
            </div>
            <p className="text-middle p-2 font-serif">
                Above is the list of code smells that we were looking for in our project, grouping them with related smells.
            </p>
        </div>
        <div className="bg-white rounded-lg p-4 md:p-6 m-2 w-full max-w-[800px] shadow-md mx-auto text-black">
            <p className="font-semibold text-4xl p-4">
                Operating Systems Project
            </p>
            <p className="text-justify text-m p-2 font-serif">
                My team and I were tasked with creating a custom pythreads library in Linux, which is a user-level threading library that allows for the creation, exiting, and joining of threads. We chose to have each thread have their own separate page tables, creatomg a new phsyical mapping for its Trampoline, Trapframe, and stack page. To allow for the switching between the main process and the spawned threads, we utilized context-switching. We made it so that upon completion of a thread, the exit method must be called so that it enters the zombie state, then join must be called to emulate the XV6 implementation of wait.      
            </p>
            <div className="grid grid-cols-2 justify-items-center">
                <img src={linuxImg} className="scale-50 align-middle" alt="Linux Logo" />
                <img src={pthreadImg} className="scale-50 align-middle" alt="Pthread Logo" />
            </div>
        </div>
      </header>
    </div>
  );
}

export default Projects;