import './index.css';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import MainRoutes from './routes';

// Moment locale and timezone configuration
import moment from 'moment-timezone'
import 'moment/locale/pt-br'

moment.locale('pt-br')
moment.tz.setDefault('America/Sao_Paulo')

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);

console.log('Render disparado');