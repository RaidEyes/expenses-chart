import data from "../../data/data.json";

interface dataObject {
  day: string;
  amount: number;
}

function Main() {
  const dates: dataObject[] = data;
  console.log(dates);

  return (
    <div className="bg-white rounded-xl p-4">
      <h2>Spending - Last 7 days</h2>
      <ul className="py-4 flex flex-row gap-2 justify-between items-end">
        {dates.map((date: { day: string; amount: number }) => (
          <li key={date.day} className="flex flex-col gap-2 items-center">
            <div
              className="bg-[var(--primary-red)] w-7 rounded-[0.2rem]"
              style={{ height: `${date.amount * 3}px` }}
            ></div>
            <p className="text-xs">{date.day}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>Total this month</p>
        <div>
          <h2>$478.33</h2>
          <div>
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
