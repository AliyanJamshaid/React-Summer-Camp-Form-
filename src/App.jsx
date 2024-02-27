import './App.css';
import Header from './Components/Header';
import Athlete from './Components/Athlete';
import Emergency from './Components/Emergency';
import Submit from './Components/Submit';
import Parents from './Components/Parents';

function App() {
  return (
    <div className="App p-b-4">
      <Header/>
      <Athlete />
      <Parents />
      <Emergency />
      <Submit />
    </div>
  );
}

export default App;
