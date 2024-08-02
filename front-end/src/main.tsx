import React from 'react'
import ReactDOM from 'react-dom/client'
import FormEmp from './components/FormEmp'
import ResultForm from './components/ResultForm'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormEmp />
    <ResultForm />
  </React.StrictMode>,
)
