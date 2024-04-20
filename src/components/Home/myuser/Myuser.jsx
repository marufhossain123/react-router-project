import { useLoaderData } from "react-router-dom";


const Myuser = ({params}) => {
    const myuser = useLoaderData();
    const {name} = myuser;
    return (
        <div>
           <h3>name:{name}</h3> 
        </div>
    );
};

export default Myuser;