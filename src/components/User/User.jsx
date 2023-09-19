import { useLoaderData } from "react-router-dom";


const User = ({user}) => {

    const {name, id ,  email ,phone} = user
    const userStyle = {
        padding: '10px',
        border: '1px solid green',
        borderRadius: '5px',


    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p> Email:{email}</p>
            <p>Phone:{phone}</p>
            
        </div>
    );
};

export default User;