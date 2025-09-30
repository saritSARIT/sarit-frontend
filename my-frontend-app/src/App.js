
import './App.css';
import BookComponents from './components/BookComponents';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './components/LogoutComponent';
import RegisterComponent from './components/RegisterComponent';
function App() {
  return (
    <div className="App">
      <RegisterComponent />
      <LoginComponent />
      <BookComponents />
      <LogoutComponent />
    </div>
  );
}

export default App;
