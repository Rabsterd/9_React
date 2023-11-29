import React, {useState} from "react";

// 상태 내리꽂기(Props Drilling) : 부모가 가진 상태(state)를 자식에게 전달해서
//                                자식이 사용할 수 있게끔 하는 것

// 부모 컴포넌트
function Exam3() {
    const [name, setName] = useState("유재석");
    // 리액트 컴포넌트의 state를 변경해야 할 때,
    // 무조건 setState를 통해서 업데이트 해주어야하며,
    // 업데이트하는 과정에서 기존의 상태값을 직접적으로 수정하면 안됨
    // == 불변성의 법칙

    return (
        <MyComponent name={name} />
    );
}

// 자식 컴포넌트
function MyComponent(props) {
    return (
        <div>
            <p>안녕</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <OtherComponent name={props.name}/>
        </div>
    );
}

function OtherComponent(props) {
    return (
        <div>{props.name}</div>
    )
}


export default Exam3;