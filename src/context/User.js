import React, {useState} from "react";
const UserContext=React.createContext();
function UserProvider({children}){
   const [user, setUser]=useState(null);
    return(
    <UserContext.Provider value={{user, setUser}}>{children}
    {children}
    </UserContext.Provider>
    );
    
}
export{UserContext, UserProvider};