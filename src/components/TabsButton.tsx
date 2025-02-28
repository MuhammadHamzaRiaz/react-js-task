import { useAppSelector } from "../redux/hooks";
import { Tab } from "../redux/modules/products/products.types";

interface TabsButtonProps {
  onTabChange: (tab: Tab) => void;
}

const TabsButton = ({ onTabChange }: TabsButtonProps) => {
  const { tab: activeTab, key_filters } = useAppSelector((state) => state.products.filters);
  const filtersActive = Boolean(key_filters?.key);
  const tabs = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Laptops",
      value: "laptops",
    },
  ];
  const onTabChangeHandler = (tab: Tab) => {
    onTabChange(tab);
  };
  return (
    <div className="flex bg-grey rounded-md p-2 h-[46px] ">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          disabled={filtersActive}
          className={`px-4 rounded-md transition-all duration-300 cursor-pointer disabled:cursor-not-allowed ${
            activeTab.value === tab.value ? "bg-yellow text-white" : "bg-grey"
          }`}
          onClick={() => onTabChangeHandler(tab)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabsButton;
