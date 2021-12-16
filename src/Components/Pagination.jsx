import React from 'react'
import './Pagination.css'

const Pagination = ({blogperpage,totalblogs,paginate}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalblogs/blogperpage); i++) {
        pageNumber.push(i);
    }
    return (
        <div className='pagination-main'>
            <ul className="pagination">
                {pageNumber.map((num)=>(
                    <li onClick={()=>paginate(num)} key={num} className='pagination-item'>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
