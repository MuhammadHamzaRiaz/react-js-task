import { Search } from "lucide-react";
import { useState } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const SearchOpenHandler = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <div className={`flex`}>
      <button
        onClick={SearchOpenHandler}
        className="px-3 py-2 cursor-pointer font-neutra hover:bg-blue-50 h-[46px] border rounded-md bg-white text-black"
      >
        <Search size={20} className="text-gray-400" />
      </button>
      <div className={`${searchOpen ? "max-w-[480px] opacity-100 ml-2" : "max-w-0 opacity-0"} relative  overflow-hidden transition-all duration-300`}>
        <Search
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 border rounded-md max-w-full min-w-72 h-[46px] pl-9 focus-visible:outline-none "
        />
      </div>
    </div>
  );
};

export default SearchInput;
