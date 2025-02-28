import Breadcrumbs from "./Breadcrumbs";

const Topbar = () => {
  return (
    <div className="flex justify-start items-center bg-white p-8 border-b border-grey">
      <Breadcrumbs />
    </div>
  );
};

export default Topbar;
