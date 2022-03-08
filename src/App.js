import './App.css';
import { Button1 } from './Components/Button1';
import { Button2 }from "./Components/Button2";
import { Button3 } from "./Components/Button3";
import { Button4 } from "./Components/Button4";

function App() {
  return (
    <div className="App">
      <td>
        <tr><Button1 /></tr>
        <tr><Button2 /></tr>
      </td>
      <td>
        <tr><Button3/></tr>
        <tr><Button4 /></tr>
      </td>
    </div>
  );
}

export default App;
