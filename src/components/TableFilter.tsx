import { useState } from "react";
import { ChevronDown, ListFilter, Search, X } from "lucide-react";

interface FilterOption<T> {
  key: keyof T | string;
  label: string;
}

interface TableFilterProps<T> {
  options: FilterOption<T>[];
  onFilterChange: (filters: { key: string; value: string }[]) => void;
}

const TableFilter = <T,>({ options, onFilterChange }: TableFilterProps<T>) => {
  const [activeFilters, setActiveFilters] = useState<{ key: string; value: string }[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<string>(
    options.length > 0 ? String(options[0].key) : ""
  );
  const [filterValue, setFilterValue] = useState("");
  const [filtersOpened, setFiltersOpened] = useState(false);
  const filtersOpenHandler = () => {
    setFiltersOpened(!filtersOpened);
  };

  const addFilter = () => {
    if (!filterValue.trim()) return;

    const newFilter = { key: selectedColumn, value: filterValue.trim() };
    const updatedFilters = [newFilter];

    setActiveFilters(updatedFilters);
    onFilterChange(updatedFilters);
    setFilterValue("");
  };

  const removeFilter = (index: number) => {
    const updatedFilters = activeFilters.filter((_, i) => i !== index);
    setActiveFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addFilter();
    }
  };

  return (
    <div className="flex font-neutra">
      <button
        onClick={filtersOpenHandler}
        className="px-3 py-2 cursor-pointer font-neutra hover:bg-blue-50 h-[46px] border rounded-md bg-white text-black"
      >
        <ListFilter size={20} />
      </button>
      <div
        className={`${
          filtersOpened ? "max-w-[480px] opacity-100 ml-2" : "max-w-0 opacity-0"
        } flex flex-nowrap gap-2 items-center overflow-hidden transition-all duration-300 `}
      >
        <div className="relative">
          <select
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="p-2  h-[46px] border rounded-md bg-white text-black appearance-none pr-8"
          >
            {options.map((option) => (
              <option key={String(option.key)} value={String(option.key)}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute top-4 right-3" size={16} />
        </div>
        <div className="w-[352px] h-[46px] py-2 relative flex border rounded-md ">
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter value"
            className="w-[250px] px-2 pl-9 focus-visible:border-none focus-visible:outline-none "
          />
          <Search
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <button
            onClick={addFilter}
            disabled={!filterValue.trim()}
            className="px-4 py-1 text-sm w-[92px] bg-blue-400 cursor-pointer text-white rounded-md hover:bg-blue-600 disabled:bg-blue disabled:cursor-not-allowed"
          >
            Add Filter
          </button>
        </div>
      </div>
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 min-w-max">
          {activeFilters.map((filter, index) => {
            const filterOption = options.find((opt) => String(opt.key) === filter.key);
            return (
              <div
                key={`${filter.key}-${index}`}
                className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-3 h-[46px] py-1 rounded-md"
              >
                <span className="font-medium">{filterOption?.label || filter.key}:</span>
                <span>{filter.value}</span>
                <button
                  onClick={() => removeFilter(index)}
                  className="ml-1 text-yellow-600 hover:text-yellow-700"
                >
                  <X size={16} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TableFilter;
