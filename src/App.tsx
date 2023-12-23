import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="lg:grid-cols-2 lg:grid lg:auto-cols-max md:max-w-full lg:w-[1055px] flex flex-col gap-6 sm:max-w-[450px] justify-center">
      <Form />
      <div className="flex flex-col gap-4">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
