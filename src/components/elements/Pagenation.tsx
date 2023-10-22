import React, { useEffect, useRef, useState } from "react";
import "./../../assets/../assets/style_css/navigation.css";

import { RightArrowAlt } from "@emotion-icons/boxicons-regular/RightArrowAlt";
import { LeftArrowAlt } from "@emotion-icons/boxicons-regular/LeftArrowAlt";
import { Contact } from "../../services/types/number";

interface PagenationProps {
  getDataTable: (arg: any) => void;
  DataPerrent: any;
  page: (arg: number) => void;
}

const Pagenation: React.FC<PagenationProps> = ({
  getDataTable,
  page,
  DataPerrent,
}) => {
  const filter = DataPerrent.filter((contact: Contact) => {
    return contact.first_name.toLowerCase().includes("*");
  });

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Calculate currentItems within the useEffect
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event: any) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(filter.length / itemsPerPage); i++) {
    pages.push(i);
  }



  const renderPageNumbers = pages.map((number: any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : undefined}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  let pageFirstBtn = null;
  if (minPageNumberLimit >= 1) {
    pageFirstBtn = (
      <li
        onClick={() => {
          setcurrentPage(1);
          setmaxPageNumberLimit(5);
          setminPageNumberLimit(0);
        }}
        className={currentPage == 1 ? "active" : undefined}
      >
        1
      </li>
    );
  }
  let pageLastBtn = null;
  if (minPageNumberLimit < pages.length - 5) {
    pageLastBtn = (
      <li
        onClick={() => {
          setcurrentPage(pages.length);
          setmaxPageNumberLimit(pages.length);
          setminPageNumberLimit(pages.length - 5);
        }}
        className={currentPage == pages.length ? "active" : undefined}
      >
        {pages.length}
      </li>
    );
  }

  useEffect(() => {
    page(itemsPerPage);
    getDataTable(currentItems);
  }, [currentPage, itemsPerPage, DataPerrent]);

  return (
    <>
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            <LeftArrowAlt />
          </button>
        </li>
        {pageFirstBtn}
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        {pageLastBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            <RightArrowAlt className="panah" />
          </button>
        </li>
      </ul>

      <div className="wrap_select_filter">
        <label htmlFor="select">Show :</label>
        <select
          name="select"
          value={itemsPerPage}
          onChange={(e) => setitemsPerPage(Number(e.target.value))}
        >
          <option value="10">10 Rows</option>
          <option value="50">50 Rows</option>
          <option value="100">100 Rows</option>
          <option value="300">300 Rows</option>
        </select>
      </div>
    </>
  );
};

export default Pagenation;
