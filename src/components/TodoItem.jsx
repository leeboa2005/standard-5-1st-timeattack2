export default function TodoItem(todo, onDeleteHandler, onCompleteHandler) {
    return (
        <div>
            <li>
                <h4>{todo.title}</h4>
                <p>{todo.content}</p>
                <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
                <button onClick={() => onCompleteHandler(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
            </li>
        </div>
    );
}
