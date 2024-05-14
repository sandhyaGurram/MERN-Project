import React, { useState } from 'react';

const Table = ({ data }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedData = data.slice().sort((a, b) => {
    const comparison = a[sortColumn] > b[sortColumn] ? 1 : -1;
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            Name
            {sortColumn === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            {/* Add more cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
