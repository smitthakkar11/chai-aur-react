import React from "react";

const UserContext = React.createContext()

export default UserContext;
/*

<UserContext>
    <Login/>
    <Card>
        <Data />
    </Card>
</UserContext>

*/

// context is like a global variable, requires a variable provider (used for wrapping)
