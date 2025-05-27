import '../App.css';
import gmailPic from '../Gmail.png';
import linkedinPic from '../Linkedin.png';
import locationPic from '../Location.png';
function Contact() {
  return (
    <div className="Contact">
      <header className="Contact-header p-8">
        <p className="text-left font-semibold text-4xl justify-center font-[georgia]">
            Feel free to reach out to me with any of the following methods:
          </p>
        <div className="">
            <div className="grid grid-cols-3 justify-items-center">
                <div className="flex items-center justify-center">
                    <img src={gmailPic} className="scale-50 align-middle" alt="Gmail Logo" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={linkedinPic} className="scale-50 align-middle" alt="LinkedIn Logo" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={locationPic} className="scale-50 align-middle" alt="Location Icon" />
                </div>
            </div>
            <div class="grid grid-cols-3 justify-items-center">
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=matthewlinerode2@gmail.com&tf=cm" class="Link font-serif">Email</a>  
                <a href="https://www.linkedin.com/in/matthew-linerode-6763b5274/" class="Link font-serif">LinkedIn</a> 
                <p className="font-serif">Location</p>
                <p className="font-[helvetica]">matthewlinerode2@gmail.com</p>
                <p className="font-[helvetica]">Matthew Linerode</p>
                <p className="font-[helvetica]">Naperville, IL</p>
            </div>
        </div>
      <hr className="w-full my-4 border-gray-300" />
      </header>
    </div>
  );
}

export default Contact;
