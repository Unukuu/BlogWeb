import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#F6F6F7] py-16">
      <div className="container m-auto">
        <div className="flex">
          <div className="flex-1 flex gap-6 flex-col">
            <h1 className="text-[18px] text-[#181A2A] font-bold">About</h1>
            <p className="text-[#696A75] w-[280px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ab
              dolor, maiores repudiandae dicta quidem mollitia soluta accusamus
              fugit? Velit magnam consequatur sint. Soluta, laudantium nobis
              minima debitis labore earum!
            </p>
            <div className="text-[#696A75]">
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 text-[#3B3C4A] items-center">
            <a href="home">Home</a>
            <a href="blog">Blog</a>
            <a href="contact">Contact</a>
          </div>
          <div className="flex-1 text-[#3B3C4A] flex gap-4 text-xl">
            <FaFacebook />
            <BiLogoInstagramAlt />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="flex justify-between items-center border-t-[1px] mt-[25px]">
          <div className="flex items-center">
            <img
              className="w-[80px] h-[80px] rounded-full"
              src="./images/like.png"
              alt=""
            />
            <div>
              <div>
                <span>Blog</span>
                <span className="font-extrabold">Web</span>
              </div>
              <div>© All Rights Reserved.</div>
            </div>
          </div>
          <div>
            <div className="flex gap-4 text-[#3B3C4A]">
              <p>Terms of Use</p>
              <p className="border-x-[1px] px-4">Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
