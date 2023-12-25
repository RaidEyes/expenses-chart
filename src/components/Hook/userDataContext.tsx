import { ReactElement, createContext, useState } from "react";
import data from "../../data/data.json";

function userDataContext({ children }: { children: ReactElement }) {
  const [dates, setDates] = useState(data);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData: {
      day: string;
      amount: number;
    }[] = [];
    for (const [key, value] of [...formData.entries()]) {
      userData.push({ day: `${key}`, amount: parseInt(`${value}`) });
    }
    setDates(userData);
  };
  return (
    <userInput.Provider value={{ dates, handleSubmit }}>
      {children}
    </userInput.Provider>
  );
}

export default userDataContext;

export const userInput = createContext<{
  dates: {
    day: string;
    amount: number;
  }[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}>({ dates: data, handleSubmit: () => {} });
