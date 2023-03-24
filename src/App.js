import logo from './logo.svg';
import './App.css';
import District from './components/District/District';

function App() {
  return (
    <div className="App">
      <District name="Netrokona" specialty="Beautiful"></District>
      <District name="Dhaka" specialty="Boring city"></District>
    </div>
  );
}

export default App;
