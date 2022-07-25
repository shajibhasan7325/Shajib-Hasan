import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";
// import img from '/Images/a.jpeg'

function Sidebar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src={'/Images/a.jpeg'}
        className="mx-auto rounded-full "
        alt="img"
        width="128"
      height="128"
      layout="responsive"
      objectFit="cover"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan ">
        <span className=" text-green">Shajib</span>Hasan
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 ">
        Web Developer
      </p>
      <a
        href=""
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 "
        download="name"
      >
        <GiTie className="w-6 h-6 " /> Download Resume
      </a>

      {/* social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href=" ">
          <AiFillGithub className="w-8 h-8 cursor-pointer " />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span>Khulna Bangladesh</span>
        </div>
        <p className="my-2 ">shajibhasan7325@gamil.com</p>
        <p className="my-2 ">+8801951-792382</p>
      </div>
      {/* Button */}
      <button
        onClick={() => window.open("mailto:shajibhasan7325@gamil.com")}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle
      </button>
    </div>
  );
}

export default Sidebar;
