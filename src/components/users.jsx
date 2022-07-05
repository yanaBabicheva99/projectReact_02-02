import React, {useState} from 'react';
import api from '../api';

const Users = () => {
   const [users, setUsers] = useState(api.users.fetchAll());

   const getBadgeClasses = () => {
       let classes = 'badge ';
       classes += users.length === 0? 'bg-danger m-2' : ' bg-primary m-2'
       return classes;
   }

    const createQualities = (qualities) => {
        return(
            qualities.map((quality) => (
                <span key={quality._id} className={`badge m-2 bg-${quality.color}`}>{quality.name}</span>)
            )
        )
    }

    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter(user => user._id !== userId))
    }

    const renderPhrase = (number) => {
        return (
            number === 0? 'Никто с тобой не тусанет': number > 4 || number === 1 ? `${number} человек тусанет с тобой сегодня`:
                `${number} человека тусанет с тобой сегодня`
        );
    }


   const handleCreate = () => {
      console.log(users);
      const rate = 5;

      return (users.map((user) =>
          <tr key={user._id}>
              <td>{user.name}</td>
              <td>{createQualities(user.qualities)}</td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{`${user.rate}/${rate}`}</td>
              <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>delete</button>
              </td>
           </tr>
      ))
   }

        if (users.length === 0) {
            return <h2>
                <span className={getBadgeClasses()}>{renderPhrase(users.length)}</span>
            </h2>

        }

    return(
        <>
           <h2>
               <span className={getBadgeClasses()}>{renderPhrase(users.length)}</span>
           </h2>

            <table className="table m-2">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                <tbody>
                {handleCreate()}
                </tbody>
            </table>

        </>
    )

}
export default Users;