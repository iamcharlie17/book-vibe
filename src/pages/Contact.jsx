import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="flex justify-center max-h-screen items-center mt-12">
      <div className="p-8 shadow-lg text-center w-96 rounded-xl">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/RhVysBg/image-removebg-preview.png"
            className=" w-56 border-2 rounded-full hover:scale-105 border-slate-100 "
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Charlie</h1>
          <h1 className="text-xl">Software Engineer</h1>
          <h1>Islamic University of Technology</h1>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebook />
          <a
            href="https://web.facebook.com/profile.php?id=61553430014777"
            target="_blank"
          >
            Riyad Hosen
          </a>
        </div>
        <div className="flex items-center gap-4">
          <MdEmail />
          <a href="https://www.google.com/gmail/" target="_blank">
            riyadhosen40@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
