import { useState, useRef } from 'react';
export default function TodoForm({ todos, setTodos }) {
    const initialState = { id: 0, title: '', content: '', isDone: false };
    const [inputTodo, setInputTodo] = useState(initialState);
    const nextId = useRef(todos.length);
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setInputTodo({ ...inputTodo, [name]: value, id: nextId.current });
        nextId.current++;
    };
    const onSubmitHandler = (event) => {
        if (!inputTodo.title || !inputTodo.content) {
            alert('제목, 내용 작성해주세요');
            return;
        }
        event.preventDefault();
        setInputTodo(...todos, inputTodo);
        setInputTodo(initialState);
    };
    return (
        <>
            <form onSubmit={{ onSubmitHandler }}>
                <label>제목</label>
                <input type="text" onChange={onChangeHandler} name="title" value={inputTodo.title}></input>
                <label>내용</label>
                <input type="text" onChange={onChangeHandler} name="content" value={inputTodo.content}></input>
                <button>추가하기</button>
            </form>
        </>
    );
}