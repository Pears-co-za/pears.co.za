import doodle from './doodle-107.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    {process.env.REACT_APP_NAME} landing page coming soon. very soon
                </h1>
                <h2>
                </h2>
                <img src={doodle} className="App-logo" alt="pears bee logo" />
            </header>
        </div>
    );
}

export default App;
