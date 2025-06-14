import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import LoginPage from './pages/Login';
import TransactionsPage from './pages/Transactions';
import TransactionDetails from './pages/TransactionDetails';
import { ToastContainer } from 'react-toastify';
import { TransactionProvider } from './contexts/TransactionContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TransactionProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/transactions' element={<TransactionsPage />} />
          <Route path='/transactions/:id' element={<TransactionDetails />} />
        </Routes>
      </TransactionProvider>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
)
