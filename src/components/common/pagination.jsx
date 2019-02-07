import React from 'react';
import _ from 'lodash';
const Pagination = (props)=> {
    const {itemsCount, pageSize, onPageChange, currentPage}= props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    console.log('pagesCount ', pagesCount);
    if (pagesCount ===1 ) return null;
    const pages = _.range(1, pagesCount + 1);
    console.log('Pages Array is ', pages);
    
    return (
            <nav>  
                <ul className="pagination">
                    {pages.map ((page, index)=> (
                        <li className={page===currentPage ? 'page-item active' : 'page-item'} key={index}>
                                <a className='page-link'  onClick={()=> onPageChange(page)}> {page}</a>
                        </li>
                    ))}
                </ul>
                
            </nav>
    )
}

export default Pagination;