import '../styles/App.css';
import NavBar from './NavBar';
import MainPage from './MainPage';
import AssignTask from './AssignTask';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MainPage /> */}
      {/* <AssignTask /> */}
      <Login />
    </div>
  );
}

export default App;
