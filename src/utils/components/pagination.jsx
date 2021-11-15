import React from 'react';
import _ from 'lodash';

const Pagination = ({ lastPage, currentPage, onPageChange }) => {
    const pages = _.range(1, lastPage + 1);
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {pages.map(page => (
                    <li key={page} class={page === currentPage ? "page-item active" : "page-item"}>
                        <a 
                        class="page-link" 
                        onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Pagination;