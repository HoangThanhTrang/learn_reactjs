import React from "react";
import UserItem from "./UserItem"
 const UserList = props =>{
    if(props.items.length === 0){
        return <h2>đéo có data</h2>
    }
    return(
        <ul className="user-list">
            {props.items.map(user =>(
                <UserItem 
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />
            ))}
        </ul>
    )
 }

 export default UserList