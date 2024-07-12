import React from "react";
import UserList from "../components/UserList"

const User = () =>{
    const listUser = [
        {
            id:'u1',
            name:'Thanh Chang',
            image:'https://images.pexels.com/photos/26734317/pexels-photo-26734317/free-photo-of-vibing-in-nature.jpeg',
            places:3
        }
    ]
    return <UserList items={listUser} />
}

export default User;