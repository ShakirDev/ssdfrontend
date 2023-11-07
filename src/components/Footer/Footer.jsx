import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-p-blue pt-8 md:pt-12 lg:pt-16">
      <div className="container mx-auto flex gap-10 flex-col items-start md:flex-row md:justify-between px-5">
        <div className="footer-info w-full md:w-1/2 flex flex-col md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-4 md:mb-6">
              <span className="font-serif">&lt;SwiftSiteDesign /&gt;</span>
            </div>
            <div>
              <p className="font-sans text-[#f4f6fc87] font-normal mt-2 md:mt-5">
                We are always open to discuss your project and
                <br /> improve your online presence.
              </p>
            </div>
          </div>
          <div className="bg-p-yellow w-full lg:w-9/12 py-5 px-5 md:px-10 mt-5 md:mt-20">
            <div className="flex flex-col md:flex-col lg:flex-row">
              <div className="mb-6 md:mb-0 md:w-1/2">
                <h3 className="font-serif whitespace-nowrap text-p-blue text-lg">
                  Email me at
                </h3>
                <a
                  href="mailto:admin@swiftsitedesign.agency"
                  className="relative font-sans text-p-blue group transition duration-300 hover:text-p-blue"
                >
                  swiftsitedesign.agency
                  <span className="absolute inset-x-0 bottom-0 w-full h-[1px] bg-p-blue transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-serif text-p-blue text-lg mt-2 lg:mt-0">
                  Call Us
                </h3>
                <a
                  href="tel:8801728178905"
                  className="relative whitespace-nowrap font-sans text-p-blue group transition duration-300 hover:text-p-blue"
                >
                  +880 172 817 8905
                  <span className="absolute inset-x-0 bottom-0 w-full h-[1px] bg-p-blue transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-cta w-full md:w-1/2">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-semibold mb-4 md:mb-6 ">
            Let's Talk!
          </h2>
          <p className="font-sans text-[#f4f6fc87] font-normal">
            We are always open to discuss your project,
            <br />
            improve your online presence, and help with your UX/UI design
            challenges.
          </p>

          {/* ICON DIV */}
          <div className="flex justify-start md:justify-start space-x-4 mt-4 md:mt-5 mb-8 :md:mb-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-p-yellow transition duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/s"
              className="text-white hover:text-p-yellow transition duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-p-yellow transition duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-5 py-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <p className="font-sans text-[#f4f6fc87] font-normal">
              Copyright {currentYear}, SwiftSiteDesign.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="li flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a
                  href="#"
                  className="relative font-sans text-[#f4f6fc87] group transition duration-300 hover:text-p-yellow"
                >
                  Terms & Conditions
                  <span className="absolute inset-x-0 bottom-[-2.5px] w-full h-[1px] bg-p-yellow transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative font-sans text-[#f4f6fc87] group transition duration-300 hover:text-p-yellow"
                >
                  Privacy Policy
                  <span className="absolute inset-x-0 bottom-[-2.5px] w-full h-[1px] bg-p-yellow transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
