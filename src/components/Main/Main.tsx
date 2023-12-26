import { useCallback, useContext } from "react";
import { userContext } from "../../App";

function Main() {
  const userData = useContext(userContext);
  if (!userData) return null;

  const addBackgroundColor = useCallback((): void => {
    const amountArr: number[] = userData.dates.map((item) => item.amount);
    const highestAmount: number = Math.max(...amountArr);
    userData.dates.forEach(
      (item: { day: String; amount: Number; color?: string }) => {
        item.color =
          item.amount === highestAmount ? `--primary-cyan` : `--primary-red`;
      }
    );
  }, [userData.dates]);

  addBackgroundColor();

  return (
    <div className="flex flex-col justify-center gap-4 p-4 bg-[var(--neutral-pale-orange)] rounded-xl">
      <h2 className="text-xl font-bold text-[var(--neutral-dark-brown)]">
        Spending - Last 7 days
      </h2>
      <ul className="relative flex flex-row items-end justify-between gap-2 py-4 border-b-2 border-b-slate-600/10">
        {userData.dates.map(
          (date: { day: string; amount: number; color?: string }) => (
            <li
              key={date.day}
              id={date.day}
              className="flex flex-col items-center w-full gap-2 group"
            >
              <div className="group-hover:visible invisible w-[110%] bg-[var(--neutral-dark-brown)] text-center py-1 rounded-md">
                <p className="text-[2.5vw] sm:text-xs text-white">
                  ${date.amount}
                </p>
              </div>
              <div
                className="w-full sm:w-9 rounded-[0.2rem] hover:brightness-125 hover:cursor-pointer"
                style={{
                  height: `${date.amount * 3}px`,
                  backgroundColor: `var(${date.color})`,
                }}
              ></div>
              <p className="text-xs text-[var(--neutral-medium-brown)]">
                {date.day}
              </p>
            </li>
          )
        )}
      </ul>
      <div>
        <p className="text-[var(--neutral-medium-brown)] text-sm">
          Total this month
        </p>
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--neutral-dark-brown)]">
            $478.33
          </h2>
          <div className="text-end">
            <p className="text-[var(--neutral-dark-brown)] font-semibold">
              +2.4%
            </p>
            <p className="text-[var(--neutral-medium-brown)] text-sm">
              from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
