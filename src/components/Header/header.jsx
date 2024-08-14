import { MyContext } from "@/provider/myprovider";
import Link from "next/link";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const { setSearchValue } = useContext(MyContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <header className="container m-auto flex justify-between items-center p-5 font-sans text-[#3B3C4A]">
        <div className="flex items-center text-xl">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src="./images/like.png"
            alt=""
          />
          <span>Blog</span>
          <span className="font-extrabold">Web</span>
        </div>
        <div className="flex gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/blogall"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="bg-[#F4F4F5] flex items-center p-2 rounded-md">
          <input
            onChange={handleChange}
            placeholder="Search"
            className="bg-[#F4F4F5]"
            type="text"
          />
          <FaSearch />
        </div>
      </header>
    </>
  );
};
export default Header;
