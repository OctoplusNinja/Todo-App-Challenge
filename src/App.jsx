import "./App.css";
import TodoContainer from "./component/TodoContainer/TodoContainer";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default App;
