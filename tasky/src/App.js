import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash dishes and put them away" />
      <Task title="Laundry" deadline="Tomorrow" description="Wash and fold clothes" />
      <Task title="Tidy" deadline="Today" description="Tidy room" />
    </div>
  );
}

export default App;