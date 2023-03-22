import React from 'react'
import {usePagination} from '../../../hooks/usePagination';


export const Pagination = ({totalPages, currentPage, changePage}) => {
  let pagesArray = usePagination(totalPages);

  return (
    <div className="page__wrapper">
        {pagesArray.map(page => 
          <span
            onClick={() => changePage(page)} 
            key={page}
            className={page === currentPage ? "page page__current" : "page"} 
          >
            {page}
          </span>
        )}
      </div>
  )
}
