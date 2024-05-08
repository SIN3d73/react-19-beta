import { createContext, ReactNode, use, useState } from 'react';

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
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const Card = () => {
  const {theme, toggleTheme} = use(ThemeContext);

  return (
    <div
      className={`max-w-md mx-auto rounded-lg p-6 ${
        theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
      }`}
    >
      <h1
        className={`text-2xl my-3 ${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }`}
      >
        Theme Card
      </h1>
      <p className={theme === 'light' ? 'text-gray-800' : 'text-white'}>
        use(context) example
      </p>
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
  return (
    <ThemeProvider>
      <Card/>
    </ThemeProvider>
  );
};

export default Context
