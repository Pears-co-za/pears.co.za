import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    {process.env.REACT_APP_NAME} landing page
                </h1>
                <h2>
                    Environment: {process.env.REACT_APP_ENV}
                </h2>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
