import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import GetExpenses from './pages/GetExpenses'
import AddExpenses from './pages/AddExpenses'
import DeletedExpenses from './pages/DeletedExpenses'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<GetExpenses />} />
          <Route path="/add-expenses" element={<AddExpenses />} />
          <Route path="/deleted-expenses" element={<DeletedExpenses />} /> 
        </Routes>
      </main>
      
    </div>
  )
}
