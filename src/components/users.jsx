import React, {useState} from 'react';
import api from '../api';

// const Users = () => {
//    const [users, setUsers] = useState(api.users.fetchAll());
//
//    const getBadgeClasses = () => {
//        let classes = 'badge ';
//        classes += users.length === 0? 'bg-danger m-2' : ' bg-primary m-2'
//        return classes;
//    }
//
//     const createQualities = (qualities) => {
//         return(
//             qualities.map((quality) => (
//                 <span key={quality._id} className={`badge m-2 bg-${quality.color}`}>{quality.name}</span>)
//             )
//         )
//     }
//
//     const handleDelete = (userId) => {
//         setUsers((prevState) => prevState.filter(user => user._id !== userId))
//     }
//
//     const renderPhrase = (number) => {
//         return (
//             number === 0? 'Никто с тобой не тусанет': number > 4 || number === 1 ? `${number} человек тусанет с тобой сегодня`:
//                 `${number} человека тусанет с тобой сегодня`
//         );
//     }
//
//
//    const handleCreate = () => {
//       console.log(users);
//       const rate = 5;
//
//       return (users.map((user) =>
//           <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{createQualities(user.qualities)}</td>
//               <td>{user.profession.name}</td>
//               <td>{user.completedMeetings}</td>
//               <td>{`${user.rate}/${rate}`}</td>
//               <td>
//                   <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>delete</button>
//               </td>
//            </tr>
//       ))
//    }
//
//         if (users.length === 0) {
//             return <h2>
//                 <span className={getBadgeClasses()}>{renderPhrase(users.length)}</span>
//             </h2>
//
//         }
//
//     return(
//         <>
//            <h2>
//                <span className={getBadgeClasses()}>{renderPhrase(users.length)}</span>
//            </h2>
// //
//             <table className="table m-2">
//                 <thead>
//                 <tr>
//                     <th scope="col">Имя</th>
//                     <th scope="col">Качества</th>
//                     <th scope="col">Профессия</th>
//                     <th scope="col">Встретился, раз</th>
//                     <th scope="col">Оценка</th>
//                     <th scope="col"> </th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {handleCreate()}
//                 </tbody>
//             </table>
//
//         </>
//     )
//
// }
// export default Users;

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        // setUsers(users.filter((user) => user._id !== userId));
        setUsers(users.filter(user => user._id !== userId));
    }
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number <15) return 'человек тусанет';
        if ([2,3,4].indexOf(lastOne) >= 0) return 'человека тусанут';
        if (lastOne === 1) return 'человек тусанет';
    };
    return (
        <>
            <h2>
                <span
                    className={'badge ' + (users.length > 0 ? "bg-primary" : "bg-danger")}>{
                    users.length > 0 ?
                        `${users.length + ' ' + renderPhrase(users.length)} с тобой сегодня`
                        : 'Никто с тобой не тусанет'}
                </span>
            </h2>
            {users.length > 0 && (
                <table className="table">
                <thead>
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th />
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.qualities.map((item) =>
                          <span key={item._id} className={'badge m-1 bg-' + item.color}>
                           {item.name}
                          </span>
                      )}</td>
                      <td>{user.profession.name}</td>
                      <td>{user.completedMeetings}</td>
                      <td>{user.rate} /5</td>
                      <td>
                          <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>
                              delete</button>
                      </td>
                  </tr>
                    )
                )
                }
                </tbody>
                </table>
                )}
        </>
    )
}
export default Users;