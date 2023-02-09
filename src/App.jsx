import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto='Burns' />
    </>
  );
}

export default App;