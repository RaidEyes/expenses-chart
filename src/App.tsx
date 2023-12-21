import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="w-full flex flex-col gap-6 sm:max-w-[450px] justify-center">
      <Header />
      <Main />
    </div>
  );
}

export default App;
