import React, { useState, useRef, useEffect } from "react";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiColumns,
  FiEyeOff,
} from "react-icons/fi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

// Composant pour une cellule de table
const TableCell = ({ children }) => {
  return <td className="p-4 borderBottom">{children}</td>;
};

// Composant pour une ligne de table
const TableRow = ({ rowData, visibleColumns }) => {
  return (
    <tr className="tr">
      {rowData.map(
        (cellData, index) =>
          visibleColumns[index] && <TableCell key={index}>{cellData}</TableCell>
      )}
    </tr>
  );
};

// Composant pour l'en-tête de la table
const TableHeader = ({ headers, visibleColumns }) => {
  return (
    <thead className="borderBottom">
      <tr>
        {headers.map(
          (header, index) =>
            visibleColumns[index] && (
              <th key={index} className="p-4  text-left ">
                {header}
              </th>
            )
        )}
      </tr>
    </thead>
  );
};

// Composant de dropdown
const Dropdown = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block w-auto h-[35px] rowsPerPage rounded"
    >
      <section
        className="flex justify-center items-center rounded"
        onClick={handleDropdownToggle}
      >
        <label className="focus-visible:outline-none w-auto h-auto py-[6px] px-[12px] text-[13px]">
          {value}
        </label>
        {!isOpen ? (
          <FaCaretDown className="w-[12px] h-[15px] mr-1" />
        ) : (
          <FaCaretUp className="w-[12px] h-[15px] mr-1" />
        )}
      </section>
      {isOpen && (
        <ul className="absolute z-10 mt-1 shadow p-2 rowsPerPageSelect text-[13px]">
          {options.map((option) => (
            <li
              key={option.value}
              className={`py-[4px] px-[10px] cursor-pointer ${
                option.value === value ? "activeOption" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Composant de pagination avec sélection du nombre de lignes par page
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  totalRows,
  startRow,
  endRow,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const options = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
    { value: "All", label: "All" },
  ];

  return (
    <div className="flex justify-between items-center p-3">
      <section className="flex items-center">
        <Dropdown
          value={rowsPerPage}
          onChange={(value) => onRowsPerPageChange(value)}
          options={options}
        />
        <label className="ml-2">
          {startRow + 1}-{endRow} {"/"} {totalRows}
        </label>
      </section>
      <div className="flex items-center w-auto rowsPerPage rounded h-9">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 h-full hover:border-y-[0.5px] hover:border-l-[0.5px] hover:border-[#aaaaaa36] rounded-l"
        >
          <FiChevronsLeft />
        </button>
        <span className="px-4 h-full flex items-center hover:border-y-[0.5px] hover:border-[#aaaaaa36]">
          {currentPage}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 h-full hover:border-y-[0.5px] hover:border-r-[0.5px] hover:border-[#aaaaaa36] rounded-r"
        >
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
};

// Composant pour gérer la visibilité des colonnes
const ColumnVisibilityToggle = ({
  headers,
  visibleColumns,
  onToggleColumn,
}) => {
  return (
    <div className="visibleColumns absolute mb-4 top-[20px] left-[65px] bg-slate-800  p-[15px] min-w-[150px] max-w-[580px] max-h-[450px] fade rounded-sm overflow-auto">
      {headers.map((header, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            checked={visibleColumns[index]}
            onChange={() => onToggleColumn(index)}
            className="hidden w-full"
          />
          <label
            className={`flex items-center cursor-pointer py-[10px] px-[15px] text-[13.5px] w-full ${
              !visibleColumns[index] ? "colonHidden" : ""
            }`}
            onClick={() => onToggleColumn(index)}
          >
            {!visibleColumns[index] && <FiEyeOff className="mr-3" />}
            {header}
          </label>
        </div>
      ))}
    </div>
  );
};

// Composant principal de la table
const Table = ({ headers, data, title, titleStyle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [handleVisibleColumns, setHandleVisibleColumns] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(headers.map(() => true));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (value) => {
    const rows = value === "All" ? data.length : Number(value);
    setRowsPerPage(rows);
    setCurrentPage(1); // Reset to first page
  };

  const handleToggleColumn = (index) => {
    const newVisibleColumns = [...visibleColumns];
    newVisibleColumns[index] = !newVisibleColumns[index];
    setVisibleColumns(newVisibleColumns);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="table w-full rounded">
      <section
        className={`${titleStyle} table-title flex items-center font-[20px] py-[20px] px-[16px] borderBottom`}
      >
        {title}
      </section>
      <section
        className={`relative flex items-center py-[20px] px-[16px] borderBottom`}
      >
        <button
          className="p-3 rowsPerPage rounded"
          onClick={() => setHandleVisibleColumns((prev) => !prev)}
        >
          <FiColumns />
          {handleVisibleColumns ? (
            <ColumnVisibilityToggle
              headers={headers}
              visibleColumns={visibleColumns}
              onToggleColumn={handleToggleColumn}
            />
          ) : null}
        </button>
      </section>
      <table className="w-full">
        <TableHeader headers={headers} visibleColumns={visibleColumns} />
        <tbody>
          {selectedData.map((rowData, index) => (
            <TableRow
              key={index}
              rowData={rowData}
              visibleColumns={visibleColumns}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        totalRows={data.length}
        startRow={startIndex}
        endRow={startIndex + selectedData.length}
      />
    </div>
  );
};

export default Table;
