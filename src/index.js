import React from 'react';
import { createRoot } from 'react-dom/client';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faX } from '@fortawesome/free-solid-svg-icons'


import NotesApp from './components/NotesApp';

// import style
import './styles/style.css';

library.add( faX )

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);