import './App.css';
import WebRoutes from './WebRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
    <Router basename='/' >
      <WebRoutes />
    </Router>
    </>
  );
}

export default App;



