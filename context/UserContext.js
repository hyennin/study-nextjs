import React, { createContext, useContext, useState } from "react";

export const UserContext = React.createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState({
        nickname: '',
        id: ''
    });

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;