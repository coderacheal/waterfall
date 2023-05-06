import '../styles/App.css';
import NavBar from './NavBar';
import MainPage from './MainPage';
import AssignTask from './AssignTask';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MainPage /> */}
      <AssignTask />
    </div>
  );
}

export default App;
