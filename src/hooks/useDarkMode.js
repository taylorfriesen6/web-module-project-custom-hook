import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  return [darkMode, setDarkMode];
}