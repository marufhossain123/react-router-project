import { Link } from "react-router-dom";


const Maruf = ({user}) => {
    const {name, email,id} = user;
    const userStyle = {
border: '2px solid purple',
padding: '20px',
borderRadius: '20px'
    }

    return (
        <div style={userStyle}>
           <h2>name:{name}</h2>
           <h4>email:{email}</h4>
           <h5>id:{id}</h5>
           <Link to={`/user/${id}`}>show details</Link> 
        </div>
    );
};

export default Maruf;