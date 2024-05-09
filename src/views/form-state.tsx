import { useFormState } from 'react-dom';

type FormState = {
  success: boolean;
  text: string;
} | null

const FormState = () => {

  const submitForm = async (prevState: FormState, queryData: FormData) => {
    const name = queryData.get("username") as string;
    console.log(prevState); // previous form state
    await new Promise((resolve) => setTimeout(resolve, 3000));
    if (name?.startsWith('J') || name?.startsWith('j')) {
      return {
        success: true,
        text: "Welcome"
      }
    } else {
      return {
        success: false,
        text: "Error"
      }
    }
  }

  const [message, formAction, pending] = useFormState<FormState, FormData>(submitForm, null)

  return (
    <>
      <title>useFormState()</title>
      <a
        className="underline text-blue-600"
        href="https://react.dev/reference/react/useActionState"
        target="_blank"
      >
        useFormState()
      </a>
      <p className="text-red-500"><b className="text-lg">&#9432;</b> renamed to <b>useActionState()</b></p>

      <form action={formAction}>
        <div className=" flex gap-2 my-2">
          <label>Name</label>
          <input
            className="border rounded px-1"
            type="text"
            name="username"
            autoComplete="off"
          />
        </div>
        <button className="rounded bg-amber-300 py-1 px-2">{pending ? 'Loading' : 'Submit'}</button>
        {message && <div>{message.text}</div>}
      </form>
    </>
  );
}

export default FormState;
