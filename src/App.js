import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./Components/Home"
import People from "./Components/People"
import Planet from "./Components/Planet"



function App() {
  return (
    <BrowserRouter>
      <Home />
      <Switch>
        <Route path="/people/:id"><People /></Route>
        <Route path="/planets/:id"><Planet /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
