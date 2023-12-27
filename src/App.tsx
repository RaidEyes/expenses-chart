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

type BalanceType = {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
};

export const userContext = createContext<UserContextValue | undefined>(
  undefined
);

export const userBalance = createContext<BalanceType | number>(0);

function App() {
  const [dates, setDates] = useState(data);
  const [balance, setBalance] = useState(0);

  return (
    <userContext.Provider value={{ dates, setDates }}>
      <userBalance.Provider value={{ balance, setBalance }}>
        <div className="transition-all duration-700 ease-in-out lg:grid-cols-2 lg:grid lg:auto-cols-max md:max-w-full lg:w-[1055px] flex flex-col gap-6 sm:max-w-[450px] justify-center">
          <Form />
          <div className="flex flex-col gap-4 ">
            <Header />
            <Main />
          </div>
        </div>
      </userBalance.Provider>
    </userContext.Provider>
  );
}

export default App;
