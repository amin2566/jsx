import './App.css';
import logo from './imageInSrc.jpg';
import "./style.css";

function App() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Amin Alimi</h1>
          <br />
          <img src={logo} />
          <br />
          <img src="images/imageInPublic.jpg" />
        </div>
        
    </div>
  );
}

export default App;
