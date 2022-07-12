import React from 'react';
import Qualitie from "./Qualitie";
import BookMark from "./BookMark";



const User = ({_id, name, qualities, profession, completedMeetings, rate, onDelete, onBookMark, bookmark}) => {
   return <tr>
        <td>{name}</td>
        <td>{qualities.map((item) => <Qualitie key={item._id} {...item}/>
        )}</td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate} /5</td>
       <td><BookMark status={bookmark} toggleBook={onBookMark} id={_id}/></td>
        <td>
            <button className='btn btn-danger' onClick={() => onDelete(_id)}>
                delete</button>
        </td>
    </tr>
}
export default User;