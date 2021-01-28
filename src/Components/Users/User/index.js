import React from 'react';

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


const user = (props) => {
    const user= users.find(user=> user.id === parseInt(props.match.params.userId))
    return (
        user ?
        <div>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
            <h3>{user.gender}</h3>
        </div> :
        <p>...loading</p>
    )
}

export default user
