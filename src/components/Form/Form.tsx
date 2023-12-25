import { userInput } from "../Hook/userDataContext";
import { useContext } from "react";

function Form() {
  const { dates, handleSubmit } = useContext(userInput);
  console.log(dates);

  return (
    <div className="py-4 bg-orange-200 rounded-xl">
      <div className="px-6 pb-6">
        <label
          className="block text-2xl font-bold tracking-wider"
          htmlFor="balance"
        >
          My Balance ($)
        </label>
        <input
          placeholder="Enter your balance"
          type="number"
          id="balance"
          name="balance"
          className="rounded-[0.25rem] px-4 py-2"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        action="submit"
        className="flex flex-col justify-center w-full gap-4 px-6"
      >
        <ul className="flex flex-col gap-4">
          {dates.map((date: { day: string; amount: number }) => (
            <li className="flex flex-row justify-start gap-7" key={date.day}>
              <input
                className="px-4 rounded-md h-7"
                type="number"
                id={date.day}
                name={date.day}
              />
              <label>{date.day}</label>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="px-4 py-2 text-lg font-bold bg-orange-300 rounded-lg hover:brightness-75"
        >
          Submit here
        </button>
      </form>
    </div>
  );
}

export default Form;
