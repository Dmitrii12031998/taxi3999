import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Header from './componets/Header'
import About from './componets/About'
import Galery from './componets/Galery';

const App = () => {

  return <div className="app_container"> 
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={About} />
        <Route path='/' component={Galery} />
      </Switch>
      <div>footer</div>
    </BrowserRouter>
  </div>
}

export default App;
