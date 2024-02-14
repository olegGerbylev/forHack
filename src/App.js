import './App.css';
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout/>
        <div className={"block"}>
            dasdas
        </div>
      {process.env.REACT_APP_PROXY}
    </div>
  );
}

export default App;
