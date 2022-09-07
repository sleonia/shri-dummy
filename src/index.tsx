import ReactDOM from 'react-dom/client';
import App from './components/app';
import './i18next';
import './index.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
