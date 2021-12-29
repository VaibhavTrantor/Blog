import React from 'react'
import './Pagination.scss'

const Pagination = ({ blogperpage, totalblogs, paginate }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalblogs / blogperpage); i++) {
        pageNumber.push(i);
    }
    const handlepaginate = (num) => {
        paginate(num);
    }
    return (
        <div className='pagination-main'>
            <ul className="pagination">
                {pageNumber.map((num) => (
                    <li onClick={() => handlepaginate(num)} key={num} className='pagination-item' id={num}>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
