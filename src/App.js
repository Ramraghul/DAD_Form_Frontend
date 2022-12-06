import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FormList, MainContainer, TopBar } from './components';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import FormView from './components/FormView';
import EditForm from './components/EditForm';

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <TopBar></TopBar>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route index element={<FormList />} />
              <Route path='/form/create' element={<MainContainer />} />
              <Route path='/form/:id' element={<FormView/>}/>
              <Route path='/form/edit/:id' element={<EditForm/>}/>
            </Routes>
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
