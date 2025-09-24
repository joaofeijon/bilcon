import './index.css';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import MainRoutes from './routes';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

console.log('Render disparado');