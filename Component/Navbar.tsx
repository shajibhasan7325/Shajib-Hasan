import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span className=" hover:text-green" onClick={() => setActiveItem(name)}>
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/project") setActiveItem("Project");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          name="About"
          setActiveItem={setActiveItem}
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          name="Project"
          setActiveItem={setActiveItem}
          route="/project"
        />
        <NavItem
          activeItem={activeItem}
          name="Resume"
          setActiveItem={setActiveItem}
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
