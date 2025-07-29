import TodoList from './TodoList';

function App() {
  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;