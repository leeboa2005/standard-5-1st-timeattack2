import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { nanoid } from 'nanoid';
export default function App() {
    const [todos, setTodos] = useState([
        { id: nanoid(), title: 'TIL 작성', content: '안녕하세요', isDone: true },
        { id: nanoid(), title: '리엑트 공부', content: '안녕하세요', isDone: false },
    ]);
    return (
        <>
            <h1>투두리스트 타임어택</h1>
            <TodoForm todos={todos} setTodos={setTodos}></TodoForm>
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
        </>
    );
}
