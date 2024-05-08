import { Link, Outlet } from 'react-router-dom';

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
        <Link to="/">Some links</Link>
        <Link to="/form-state">FormState</Link>
        <Link to="/form-status">FormStatus</Link>
        <Link to="/optimistic">Optimistic</Link>
      </div>

      <div className="border rounded p-4">
        <Outlet/>
      </div>
    </main>
  )
}

export default App
