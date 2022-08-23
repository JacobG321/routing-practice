import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from 'react-router-dom'
import Home from './components/Home';
import IsWord from './components/IsWord';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:wordo' element={<IsWord />}/>
          <Route path='/:num' element={<IsWord />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
