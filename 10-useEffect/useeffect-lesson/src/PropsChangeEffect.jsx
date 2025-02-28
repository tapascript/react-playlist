import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const PropsChangeEffect = ({userId}) => {
    const [user, setUser] = useState(null);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }, [userId])
  return (
    <div>
        <h2>User Details</h2>
        {user ? <p>{user?.name}</p> : <p>Loading...</p>}
    </div>
  )
}
PropsChangeEffect.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default PropsChangeEffect;
