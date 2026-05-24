import { useEffect, useState } from "react"

import {
  getAllActiveExpence,
  updateExpence,
  deleteExpence
} from "../api/expensesApi"

export default function AllExpensesPage() {

  const [expenses, setExpenses] = useState([])

  const [loading, setLoading] = useState(true)

  const [editId, setEditId] = useState(null)

  const [editForm, setEditForm] = useState({
    title: "",
    amount: "",
    category: ""
  })

  const getExpenses = async () => {

    try {

      const res = await getAllActiveExpence()

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
    getExpenses()
  }, [])

  const handleDelete = async (id) => {

    try {

      await deleteExpence(id)

      getExpenses()

    }
    catch (err) {

      console.log(err)
    }
  }

  const handleEdit = (item) => {

    setEditId(item._id)

    setEditForm({
      title: item.title,
      amount: item.amount,
      category: item.category
    })
  }

  const handleUpdate = async (id) => {

    try {

      await updateExpence(id, editForm)

      setEditId(null)

      getExpenses()

    }
    catch (err) {

      console.log(err)
    }
  }

  return (
    <div>

      <h1 className="page-title">
        All Expenses
      </h1>

      <div className="card">

        {loading ? (

          <p className="loading">
            Loading...
          </p>

        ) : (

          <table className="expense-table">

            <thead>

              <tr>
                <th>Title</th>

                <th>Amount</th>

                <th>Category</th>

                <th>Date & Time</th>

                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {expenses.length === 0 ? (

                <tr>
                  <td
                    colSpan="5"
                    className="no-data"
                  >
                    No Expenses Found
                  </td>
                </tr>

              ) : (

                expenses.map((item) => (

                  <tr key={item._id}>

                    <td>

                      {editId === item._id ? (

                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              title: e.target.value
                            })
                          }
                        />

                      ) : (
                        item.title
                      )}

                    </td>

                    <td>

                      {editId === item._id ? (

                        <input
                          type="number"
                          value={editForm.amount}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              amount: e.target.value
                            })
                          }
                        />

                      ) : (
                        `₹ ${item.amount}`
                      )}

                    </td>

                    <td>

                      {editId === item._id ? (

                        <select
                          value={editForm.category}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              category: e.target.value
                            })
                          }
                        >
                          <option value="Food">
                            Food
                          </option>

                          <option value="Travel">
                            Travel
                          </option>

                          <option value="Shopping">
                            Shopping
                          </option>

                          <option value="Other">
                            Other
                          </option>

                        </select>

                      ) : (
                        item.category
                      )}

                    </td>

                    <td>
                      {
                        new Date(
                          item.createdAt
                        ).toLocaleString()
                      }
                    </td>

                    <td>

                      {editId === item._id ? (

                        <button
                          className="action-btn save-btn"
                          onClick={() =>
                            handleUpdate(item._id)
                          }
                        >
                          Save
                        </button>

                      ) : (

                        <button
                          className="action-btn edit-btn"
                          onClick={() =>
                            handleEdit(item)
                          }
                        >
                          Edit
                        </button>

                      )}

                      <button
                        className="action-btn delete-btn"
                        onClick={() =>
                          handleDelete(item._id)
                        }
                      >
                        Delete
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