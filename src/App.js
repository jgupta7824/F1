import  './App.css';
import Header from './containers/Header/Header';
import Routes from './routes/routes'

function App() {
  return (
    <div className="layout">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
