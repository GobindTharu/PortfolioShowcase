import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-transparent">
      <div className="bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-100">
          {/* My Info */}
          <div className="text-center">
            <Link to="/">
              <img
                src="./logo.png"
                className="h-16 w-52  bg-cover cursor-pointer"
              ></img>
            </Link>
            <p className="text-sm text-gray-900">
              "I'm passionate about solving real-world problems with code and
              always learning something new." "I'm passionate about solving
              real-world problems with code and always learning something new."
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg items-center font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-900">
              <li>
                <a href="/about-us" className="hover:underline">
                  About Me
                </a>
              </li>
              <li>
                <a href="/career" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:underline">
                  FAQs / Help
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline"></a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Jobs By Area */}
          <div>
            <h3 className="flex flex-col items-center justify-center text-lg font-semibold mb-3">
              Jobs By Functional Area
            </h3>
            <ul className="flex flex-col items-center justify-center space-y-2 text-sm text-gray-900">
              <li>Website & Software</li>
              <li>Education & Training</li>
              <li>Graphic & UI/UX Design</li>
              <li>Accounting & Finance</li>
              <li>Restaurant & Food</li>
              <li>Health & Hospital</li>
              <li>Other More....</li>
            </ul>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-3">Our Location</h3>
            <p className="text-sm mb-3">
              <span>Kapilvastu, Nepal</span>
            </p>
            <p className="text-sm mb-3">
              <span>gobind9800@gmail.com</span>
            </p>
            <p className="text-sm mb-3">
              <span>+977-9816494422</span>
            </p>
            <iframe
              title="balgobind's Location"
              src="https://maps.google.com/maps?q=bhairahawa%2C%20nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-42 border-0 rounded-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-950 text-sm text-gray-300 px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Social Links */}
          <div className="flex items-center space-x-3">
            <span>Connect With Me:</span>
            <a href="#" className="text-white hover:text-blue-400 text-lg">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-blue-300 text-lg">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white hover:text-blue-300 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-pink-400 text-lg">
              <FaInstagram />
            </a>
          </div>

          {/* Center: Copyright */}
          <p className="text-center flex-1 md:text-center">
            © <span>Bal Gobind Chaudhary, {new Date().getFullYear()} </span> All
            rights reserved{" "}
          </p>

          {/* Right: Download App */}
          <div className="flex items-center space-x-2">
            <span>Download App</span>
            <a
              href="https://play.google.com/store/games?hl=en&pli=1"
              className="block"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Download App"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
