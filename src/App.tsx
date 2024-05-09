import { Link, NavLink, Outlet } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(1);
  //
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const fetchSth = async () => {
  //   console.log(await fetchExchangeRates(1));
  // }
  //
  // // const data = use(fetchSth())
  //
  // useEffect(() => {
  //   fetchSth();
  // }, [fetchSth]);

  return (
    <main className="container m-auto">
      <h1 className="text-xl font-bold my-2">
        New features
      </h1>

      <div className="flex gap-6 underline text-blue-600 mb-4">
        <NavLink className={({isActive}) => isActive ? "bg-blue-100 p-1 rounded" : "p-1"} to="/">Some links</NavLink>
        <NavLink className={({isActive}) => isActive ? "bg-blue-100 p-1 rounded" : "p-1"} to="/form-state">FormState</NavLink>
        <NavLink className={({isActive}) => isActive ? "bg-blue-100 p-1 rounded" : "p-1"} to="/form-status">FormStatus</NavLink>
        <NavLink className={({isActive}) => isActive ? "bg-blue-100 p-1 rounded" : "p-1"} to="/transition">Transition</NavLink>
        <NavLink className={({isActive}) => isActive ? "bg-blue-100 p-1 rounded" : "p-1"} to="/optimistic">Optimistic</NavLink>
        <NavLink className={({isActive}) => isActive ? "bg-blue-100 p-1 rounded" : "p-1"} to="/context">Context</NavLink>
        <NavLink className={({isActive}) => isActive ? "bg-blue-100 p-1 rounded" : "p-1"} to="/fetch">Fetch</NavLink>
      </div>

      <div className="border rounded p-4">
        <Outlet/>
      </div>
    </main>
  )
}

export default App
