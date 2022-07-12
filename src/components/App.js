import React from 'react'
import {useState} from "react";
import api from "../api";
import User from "./User";
import SearchStatus from "./SearchStatus";



const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(users.map(user => {
            if (user._id === id) {

                // if (!user.bookmark) {
                //     user.bookmark = true;
                //
                // } else {
                //     user.bookmark = false;
                //
                // }
               user.bookmark = !user.bookmark
            }

            return user;
        }))

    }
    return (
        <div>
         <SearchStatus length={users.length}/>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => <User key={user._id} {...user} onDelete={handleDelete} onBookMark={handleToggleBookMark} />)}
                    </tbody>
                </table>
            )}
        </div>
    )
}
export default App;