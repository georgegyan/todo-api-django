import './App.css';
import ToolsList from './ToolsList';

function App() {
  return (
    <div className="app" style={{ padding: '20px', margin: '8px auto' }}>
      <h1 style={{ textAlign: 'center' }}>Tools App</h1>
      <ToolsList />
    </div>
  );
}

export default App;