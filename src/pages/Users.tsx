import { useEffect, useMemo } from "react";
// components
import DynamicTable from "../components/DataTable";
import SearchInput from "../components/SearchInput";
import TablePagination from "../components/TablePagination";
import TableFilter from "../components/TableFilter";
// constants
import { filterAbleUserColumns, perPageOptions, userTableColumns } from "../utils/constants";
// icons 
import { ChevronDown } from "lucide-react";
// redux
import { fetchUsers } from "../redux/modules/user/user.action";
import { KeyFilters } from "../redux/modules/user/user.types";
import {
  setKeyFilters,
  setPageNumber,
  setPageSize,
  setSearchQuery,
} from "../redux/modules/user/usersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const { users: data, _status, filters } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, filters.pageSize, filters.pageNumber]);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(Number(e.target.value)));
  };
  const onFilterChange = (filters: KeyFilters[]) => {
    dispatch(setPageNumber(1));
    dispatch(setKeyFilters(filters[0]));
    if (filters.length === 0) {
      dispatch(fetchUsers());
    } else {
      dispatch(fetchUsers());
    }
  };
  const filteredData = useMemo(() => {
    if (!filters.searchQuery) return data;
    return data.filter((row) =>
      Object.values(row).some(
        (value) =>
          value !== null &&
          value !== undefined &&
          String(value).toLowerCase().includes(filters.searchQuery.toLowerCase())
      )
    );
  }, [filters.searchQuery, data]);
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="flex items-center gap-4 flex-wrap mb-4">
        <TableFilter
          options={filterAbleUserColumns}
          onFilterChange={(filters) => {
            onFilterChange(filters);
          }}
        />
        <span className="w-1 h-8 bg-grey"></span>
        <SearchInput
          placeholder="Search"
          value={filters.searchQuery}
          onChange={(serachQuery) => dispatch(setSearchQuery(serachQuery))}
        />
        <span className="w-1 h-8 bg-grey"></span>
        <div className="relative">
          <select
            value={filters.pageSize}
            onChange={handlePageSizeChange}
            className="p-2 flex items-center pr-6 appearance-none border rounded-md h-[46px]"
          >
            {perPageOptions.map((size) => (
              <option key={size} value={size}>
                {size} per page
              </option>
            ))}
          </select>
          <ChevronDown className="absolute top-4 right-3" size={16} />
        </div>
      </div>

      <div className="w-[calc(100vw-320px)] overflow-auto">
        <DynamicTable
          data={filteredData}
          loading={_status._loading}
          skeletonRows={filters.pageSize}
          columns={userTableColumns}
        />
      </div>
      <TablePagination
        currentPage={filters.pageNumber}
        totalPages={Math.ceil(filters.total / filters.pageSize)}
        onPageChange={(page) => dispatch(setPageNumber(page))}
      />
    </div>
  );
};

export default UsersPage;
