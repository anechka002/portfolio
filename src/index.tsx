import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/Global.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <GlobalStyle/>
    <App />
  </div>
);
