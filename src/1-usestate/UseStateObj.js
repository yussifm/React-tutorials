import {useState} from "react";

const UseStateObj = () => {

    const [people, setPeople] = useState({
        name: "one",
        age: "21",
        message: "some massege"
    });

    const changeMessage = () => {
        setPeople({...people, message: "message Change"})
    }

    return (
        <div>
            <h1>{people.name}</h1>
            <h1>{people.age}</h1>
            <h1>{people.message}</h1>
            <button onClick={() => changeMessage()}>Change Message</button>
        </div>
    )
}

export default UseStateObj
