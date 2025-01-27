import react from 'react';
import reactDOM from 'react-dom/client';

const jsxHeading = <h1 id="heading">Hello world from JSX!</h1>

const root = reactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);