import { createContext, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./data/data.json";

type UserContextValue = {
  dates: { day: string; amount: number; color?: string }[];
  setDates: React.Dispatch<
    React.SetStateAction<{ day: string; amount: number; color?: string }[]>
  >;
};

export const userContext = createContext<UserContextValue | undefined>(
  undefined
);

function App() {
  const [dates, setDates] = useState(data);

  return (
    <userContext.Provider value={{ dates, setDates }}>
      <div className="transition-all duration-500 ease-in-out lg:grid-cols-2 lg:grid lg:auto-cols-max md:max-w-full lg:w-[1055px] flex flex-col gap-6 sm:max-w-[450px] justify-center">
        <Form />
        <div className="flex flex-col gap-4 ">
          <Header />
          <Main />
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
