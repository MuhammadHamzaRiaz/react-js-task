interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  className?: string;
  symbol?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  skeletonRows?: number;
}

const DataTable = <T extends object>({
  data,
  columns,
  loading = false,
  skeletonRows = 5,
}: DataTableProps<T>) => {
  const getValue = (item: T, key: string): React.ReactNode => {
    const value = key in item ? (item as Record<string, unknown>)[key] : undefined;
    return value !== undefined && value !== null ? String(value) : "N/A";
  };

  return (
    <table className="min-w-max w-full">
      <thead className="bg-blue text-black">
        <tr>
          {columns.map((column) => (
            <th key={String(column.key)} className={`p-3 text-left border-grey border`}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading ? (
          Array.from({ length: skeletonRows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="animate-pulse">
              {columns.map((_, colIndex) => (
                <td key={colIndex} className="p-3">
                  <div className="h-5 bg-gray-300 rounded w-full"></div>
                </td>
              ))}
            </tr>
          ))
        ) : data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="p-3 text-center">
              No data available
            </td>
          </tr>
        ) : (
          data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`${
                    column.className ? column.className : ""
                  }  p-3 text-left border-grey border`}
                >
                  {column.symbol} {getValue(item, String(column.key))}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
