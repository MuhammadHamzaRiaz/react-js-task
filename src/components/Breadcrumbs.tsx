import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((segment) => segment);
  return (
    <nav className="text-gray-600  ">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-yellow">{segment}</span>
              ) : (
                <Link to={path} className="text-yellow hover:underline">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
