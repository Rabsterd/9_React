import React, {useState} from "react";

// 부모컴포넌트
const Exam4 = () => {

    const [id, setId] = useState("");

    const onChangeId = (event) => {
        setId(event.target.value);
    }

    return (
        <>
            <Id onChangeId={onChangeId}/>
            <div>
                <button disabled={id.length == 0}>Login</button>
            </div>
        </>
    );

}

// 자식컴포넌트 Id
const Id = ({onChangeId}) => {

    return (
        <div>
            <label htmlFor="id">ID: </label>
            <input id="id" onChange={onChangeId}/>
        </div>
    );
}

export default Exam4;