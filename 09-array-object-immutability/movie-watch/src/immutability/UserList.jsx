import { useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([
        {
            id: crypto.randomUUID(),
            name: "tapas",
            address: "bangalore",
        },
    ]);

    function changeUser(id, name) {
        /*const found = users.find((user) => user.id === id);
        found.name = name
        console.log(users)
        setUsers([...users]);*/

        const usersCopy = [...users];
        const found = usersCopy.find((user) => user.id === id);
        found.name = name;
        setUsers(usersCopy);
    }

    function addUser() {
        /*users[1] = {
            id: crypto.randomUUID(),
            name: "Jack",
            address: "Titanic",
        };
        setUsers([...users]);
        console.log(users);*/

        const newUser = {
            id: crypto.randomUUID(),
            name: "Jack",
            address: "Titanic",
        };

        setUsers([...users, newUser]);
    }

    return (
        <div className="flex flex-col">
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="flex">
                        <p className="m-2">
                            {user.name} lives in {user.address}
                        </p>
                        <button
                            className="underline cursor-pointer"
                            onClick={() => changeUser(user.id, "Random")}
                        >
                            Chage
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className="bg-amber-600 rounded-2xl my-2 cursor-pointer"
                onClick={addUser}
            >
                Add
            </button>
        </div>
    );
};

export default UserList;
