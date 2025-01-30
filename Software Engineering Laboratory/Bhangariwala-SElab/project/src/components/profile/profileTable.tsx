import React, { useState } from "react";
import "./profileTabel.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
const data = [
  { id: 1, item1: "Value1-1", item2: "Value1-2", item3: "Value1-3", item4: "Value1-4" },
  { id: 2, item1: "Value2-1", item2: "Value2-2", item3: "Value2-3", item4: "Value2-4" },
  { id: 3, item1: "Value3-1", item2: "Value3-2", item3: "Value3-3", item4: "Value3-4" },
  // Add more data as needed
];

const TableWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of items per page

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, data.length - 1);
  const paginatedData = data.slice(startIndex, endIndex + 1);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>OrderId</th>
            <th>Quantity</th>
            <th>Payment</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.item1}</td>
              <td>{item.item2}</td>
              <td>{item.item3}</td>
              <td>{item.item4}</td>
              <td>
                <button className="view-button" onClick={() => console.log(item)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithPagination;
