import { NavLink } from "react-router-dom";
// icons
import { Users, Box } from "lucide-react";

const Sidebar = () => {
  const pagesLink = [
    {
      name: "Users",
      link: "/users",
      icon: Users,
    },
    {
      name: "Products",
      link: "/products",
      icon: Box,
    },
  ];
  return (
    <div className="h-screen w-68  text-grey p-5 flex flex-col border-r border-grey">
      <h2 className="text-3xl font-semibold mb-8 text-yellow font-neutra">A S T U D I O</h2>
      <ul className="space-y-4">
        {pagesLink.map((page, index) => (
          <li key={index}>
            <NavLink
              to={page.link}
              className={({ isActive }) => isActive ? "flex items-center font-neutra gap-2 p-3 relative hover:bg-grey duration-300 text-black rounded-sm bg-grey before:absolute before:w-[5px] before:h-5 before:rounded-r-sm before:bg-yellow before:left-0" : "flex items-center font-neutra gap-2 p-3 hover:bg-grey duration-300 text-black rounded-sm"
              }
              
            >
              <page.icon size={20} />
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
