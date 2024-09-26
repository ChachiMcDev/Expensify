import React from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';




const root = createRoot(document.getElementById('app'));
root.render(<AppRouter />);

