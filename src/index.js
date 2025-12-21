import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';
import './index.css';

const element = document.getElementById('root');

if (!element) {
  throw new Error('No se ha encontrado el elemento con id "root"');
}

const root = ReactDOM.createRoot(element);

root.render(
  <Provider>
    <App />
  </Provider>
);