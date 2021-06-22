import './App.css';
import Manufacturers from './components/Manufacturers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Manufacturers/>
        </Route>
        <Route path='/products'>
          

        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
