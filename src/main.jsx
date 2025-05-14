import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import LoginPage from './pages/Login';
import TransactionsPage from './pages/Transactions';
import ModalNewTransaction from './components/ModalNewTransaction/ModalNewTransaction';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/transactions' element={<TransactionsPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
