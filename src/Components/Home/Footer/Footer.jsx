import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-fuchsia-950 text-white py-8">
      <footer className="max-w-7xl mx-auto footer  p-10 text-lg">
        <aside>
        <h1 className="text-2xl font-bold">Bioscope.<span className="text-blue-500">TV</span></h1>
          <p>
          Movies & TV Shows, Online cinema,
            <br />
            Movie database HTML Template.
          </p>
          <div className="flex gap-7 text-2xl">
            <p><FaFacebook></FaFacebook></p>
            <p><FaTwitter></FaTwitter></p>
            <p><FaInstagram></FaInstagram></p>
            <p><FaTiktok></FaTiktok></p>
          </div>

        </aside>
        <nav>
          <header className="footer-title">Bioscope.TV</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">My profile</a>
          <a className="link link-hover">Pricing plan</a>
          <a className="link link-hover">Contacts</a>
        </nav>
        <nav>
          <header className="footer-title">Browser</header>
          <a className="link link-hover">Live TV</a>
          <a className="link link-hover">Live News</a>
          <a className="link link-hover">Live Sports</a>
          <a className="link link-hover"> Streaming Library</a>
        </nav>
        <nav>
          <header className="footer-title">Help</header>
          <a className="link link-hover">Account & Billing</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Supported devices</a>
          <a className="link link-hover">Accessibility</a>
        </nav>
        
      </footer>
       <div className="max-w-7xl mx-auto px-10 text-center">
        <hr className="p-2 "/>
       <p>Copyright © 2024 - All right reserved</p>
       </div>
    </div>
  );
};

export default Footer;
