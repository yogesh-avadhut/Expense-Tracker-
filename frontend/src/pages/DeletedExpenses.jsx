import { useEffect, useState } from "react"

import {
  getAllInactiveExpence,
  restoreDeletedExpence
} from "../api/expensesApi"

export default function DeletedExpensesPage() {

  const [expenses, setExpenses] = useState([])

  const [loading, setLoading] = useState(true)

  const getDeletedExpenses = async () => {

    try {

      const res = await getAllInactiveExpence()

      setExpenses(res.data.data)

    } 
    catch (err) {

      console.log(err)
    } 
    finally {

      setLoading(false)
    }
  }

  useEffect(() => {
    getDeletedExpenses()
  }, [])

  const handleRecover = async (id) => {

    try {

      await restoreDeletedExpence(id)

      getDeletedExpenses()

    } 
    catch (err) {

      console.log(err)
    }
  }

  return (
    <div>

      <h1 className="page-title">Deleted Expenses</h1>

      <div className="card">

        {loading ? (

          <p className="loading">Loading...</p>

        ) : (

          <table className="expense-table">

            <thead>

              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {expenses.length === 0 ? (

                <tr>
                  <td colSpan="5" className="no-data">
                    No Deleted Expenses Found
                  </td>
                </tr>

              ) : (

                expenses.map((item) => (

                  <tr key={item._id}>

                    <td>{item.title}</td>

                    <td>₹ {item.amount}</td>

                    <td>{item.category}</td>

                    <td>
                      <span className="badge badge-no">
                        Deleted
                      </span>
                    </td>

                    <td>

                      <button
                        className="action-btn recover-btn"
                        onClick={() => handleRecover(item._id)}
                      >
                        Recover
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        )}

      </div>

    </div>
  )
}