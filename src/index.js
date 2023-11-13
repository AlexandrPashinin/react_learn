import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './redux-state/store'
import { createTheme, ThemeProvider, } from '@mui/material/styles';

const theme = createTheme({
// 
}) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ThemeProvider theme={theme} >
        <Provider store = {store} >
            <App></App>
        </Provider>
    </ThemeProvider>  
    </BrowserRouter>
    
);


