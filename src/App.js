import './App.css';
import Manufacturers from './components/Manufacturers'
import ManufacturerDetail from './components/ManufacturerDetail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Manufacturers/>
        </Route>
        <Route path='/products/:id'>
        <ManufacturerDetail/>
        </Route>
        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
