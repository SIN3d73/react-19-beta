import { createContext, ReactNode, Ref, use, useRef, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderState = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
};

const initialState: ThemeProviderState = {
  theme: 'light',
  toggleTheme: () => null,
};

const ThemeContext = createContext<ThemeProviderState>(initialState);

const ThemeProvider = (
  {
    children,
    defaultTheme = 'light',
  }: ThemeProviderProps
) => {

  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext value={{theme, toggleTheme}}>
      {children}
    </ThemeContext>
  );
};

const Card = ({ref}: { ref: Ref<HTMLDivElement> }) => {
  // hard to find info about just use()
  const {theme, toggleTheme} = use(ThemeContext);

  return (
    <div
      ref={ref}
      className={`max-w-md mx-auto rounded-lg p-6 ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
      }`}
    >
      <title>use(context)</title>
      <div>
        <a
          className={`underline my-3 ${
            theme === 'light' ? 'text-blue-800' : 'text-blue-200'
          }`}
          href="https://react.dev/reference/react/use#reading-context-with-use"
          target="_blank"
        >
          use(context)
        </a>
      </div>
      <button
        onClick={toggleTheme}
        className='bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4'
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};

const Context = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {console.log(ref.current)}
      <ThemeProvider>
        <Card ref={ref}/>
      </ThemeProvider>
    </>
  );
};

export default Context
