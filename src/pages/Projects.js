import '../App.css';
import { useEffect } from "react";
import cMatrix from '../cMatrix.png';

function Projects() {
    useEffect(() => {
    document.title = "Matthew Linerode | Projects";
  }, []);
  return (
    <div className="Projects">
      <header className="Projects-header p-8">
        <div className="Project-card text-black">
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
      </header>
    </div>
  );
}

export default Projects;
