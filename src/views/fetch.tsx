import { Suspense, use, useState } from 'react';
import axios from 'axios';
import { ErrorBoundary } from 'react-error-boundary';

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchPosts = async (id = 0) => {
  const {data} = await axios<TodoItem>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return data
};

const TodoItems = ({id}: { id: number }) => {
  const todo = use(fetchPosts(id));

  return (
    <ul>
      <div className='flex gap-2 bg-blue-50 p-4 my-6 rounded-lg'>
        <div className='text-xl font-bold'>{todo.completed ? <>&#9989;</> : <>&#10060;</>}</div>
        <div>{todo.title}</div>
      </div>
    </ul>
  );
};

const Fetch = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <h3>use(promise) example</h3>
      <div className="flex gap-2">
        {count}
        <button className="rounded bg-green-200 size-6" onClick={() => setCount((s) => s + 1)}>+</button>
        <button className="rounded bg-red-200 size-6" onClick={() => setCount((s) => s - 1)}>-</button>
      </div>

      <ErrorBoundary fallback={<span>error!</span>}>
        <Suspense fallback="loading...">
          <TodoItems id={count}/>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default Fetch;
