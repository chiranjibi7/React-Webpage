import React from 'react';
import {Link} from 'react-router-dom';

const users=[
    {
        id:1,
        name: 'Chiran',
        age: 25,
        gender: 'male'
    },
    {
        id:2,
        name: 'Gokarna',
        age: 25,
        gender: 'male'
    },
    {
        id:3,
        name: 'Bijay',
        age: 25,
        gender: 'male'
    }
];
const Users = (props) => {
    console.log(props);
    return (
        <div>
            {users.map(user=>{
                return <Link to={`/users/${user.id}`}><h2>{user.name}</h2></Link>
            })}
        </div>
    )
}

export default Users
