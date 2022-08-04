import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateFlashCard from './pages/CreateFlashCard/CreateFlashCard';
import ListFlashCards from './pages/ListFlashCard/ListFlashCards';
import DetailsFlashCard from './pages/DetailsFlashCard/DetailsFlashCard';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/' component={CreateFlashCard} exact />
         <Route path='/list' component={ListFlashCards} />
         <Route path='/details' component={DetailsFlashCard} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
