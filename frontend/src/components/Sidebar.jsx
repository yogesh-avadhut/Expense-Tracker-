

import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (

    <aside className="sidebar">
      <h2>Manage Expenses</h2>
      <nav>
        <NavLink to="/">All Expenses</NavLink>
        <NavLink to="/add-expenses">Add expenses</NavLink>
        <NavLink to="/deleted-expenses">deleted expenses</NavLink>
      </nav>

    </aside>
  )
}
