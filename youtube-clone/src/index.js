import React from "react";
import { ReactDOM } from "react-dom/client";

import app from './app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<app />);