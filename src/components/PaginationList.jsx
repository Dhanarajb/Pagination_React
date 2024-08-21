import React, { useState } from 'react';
import Pagination from './Pagination';
import './PaginatedTable.css'; // Import the CSS file

// Sample table data
const tableData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
  { id: 6, name: 'Emily Clark', email: 'emily.clark@example.com' },
  { id: 7, name: 'David Harris', email: 'david.harris@example.com' },
  { id: 8, name: 'Sarah Wilson', email: 'sarah.wilson@example.com' },
  { id: 9, name: 'Michael Lee', email: 'michael.lee@example.com' },
  { id: 10, name: 'Laura Martinez', email: 'laura.martinez@example.com' },
];

const ITEMS_PER_PAGE = 3;

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTableData = tableData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginatedTable;
