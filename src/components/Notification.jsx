import { useEffect, useState } from 'react';

const Notification = ({status}) => {
    const [show, setShow] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setShow(false);
        }, 5000)

        return () => clearTimeout(timer);
    },[])

    if(!show){
        return <div></div>;
    }
    
    return (
        <div className="notification-container">
            {status.type === 'wrong_generation' ? <div className='notification'>Wrong generation or check your spelling!</div> : 
            <div className='notification'>You already made that guess!</div>}
        </div>
    );
}

export default Notification