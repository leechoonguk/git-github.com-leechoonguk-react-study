import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="test1" delete=""/>
      <Todo text="test2"/>
      <Todo text="test3"/>
    </div>
  );
}

export default App;
