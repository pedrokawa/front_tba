import './App.css'
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Converter from './components/converter';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/converter" component={Converter} />
      </Switch>

      <Form />
    </div>
  )
}

export default App