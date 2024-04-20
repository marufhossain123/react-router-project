import {useLoaderData} from "react-router-dom";
import Maruf from "./Maruf";
import './Users.css'
const Users = () => {
const users = useLoaderData();
console.log(users);
    return (
        <div>
           <h3>users:{users.length}</h3> 
           <p>It is my user interface</p>
           <p>i am maruf hossain shawon</p>
           <div className="users">
            {
                users.map (user => <Maruf key={user.id} user={user}></Maruf> )
            }
           </div>

        </div>
    );
};

export default Users;