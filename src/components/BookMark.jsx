import React from 'react';

const BookMark = ({status, toggleBook, id}) => {
    return <button className='btn btn-light' onClick={() => toggleBook(id)}>
        <i className={status? 'bi bi-bookmark-check-fill' : 'bi bi-bookmark-check'}></i>
           </button>
    // return <button className='btn btn-light'>
    //     <i className={status? 'bi bi-bookmark-check-fill' : 'bi bi-bookmark-check'} onClick={() => toggleBook(id)}></i>
    // </button>
};

export default BookMark;
