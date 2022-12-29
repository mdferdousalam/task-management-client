
import './App.css';

import router from './routes/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
