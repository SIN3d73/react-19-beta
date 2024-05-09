import { useFormStatus } from 'react-dom';

const Submit = () => {
  const {pending} = useFormStatus();
  return <button
    className="rounded bg-amber-300 py-1 px-2"
    disabled={pending}
  >
    {pending ? 'Submitting...' : 'Submit'}
  </button>;
};

const Info = () => {
  const {data} = useFormStatus();
  const name = data?.get("username") as string;
  return <small className="text-blue-400">{name && `${name} is being send...`}</small>;
};

const formAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

const FormStatus = () => {
  return (
    <>
      <title>useFormStatus()</title>
      <a
        className="underline text-blue-600"
        href="https://react.dev/reference/react-dom/hooks/useFormStatus"
        target="_blank"
      >
        useFormStatus()
      </a>

      <form action={formAction}>
        <div className="flex items-center gap-2 my-2">
          <label>Name starts with "J"</label>
          <input
            className="border rounded px-1"
            type="text"
            name="username"
            autoComplete="off"
          />
          <Info/>
        </div>
        <Submit/>
      </form>
    </>
  );
};

export default FormStatus;
