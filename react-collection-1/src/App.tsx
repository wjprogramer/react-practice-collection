import {
  Routes,
  Route
} from 'react-router';
import {
  BrowserRouter
} from 'react-router-dom';

import './App.css';

const basePath = process.env.BASE_PATH || '/';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basePath}>
        <Routes>
          <Route path="/demos/getSnapshotBeforeUpdate" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
