import {
  Routes,
  Route
} from 'react-router';
import {
  BrowserRouter
} from 'react-router-dom';

import GetSnapshotBeforeUpdateDemo from './demos/getSnapshotBeforeUpdate';
import HomePage from './demos/homePage';

const basePath = process.env.BASE_PATH || '/';

function App() {
  return (
    <BrowserRouter basename={basePath}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demos/getSnapshotBeforeUpdate" element={<GetSnapshotBeforeUpdateDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
