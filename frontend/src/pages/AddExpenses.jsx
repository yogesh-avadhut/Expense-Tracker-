import { useState } from "react"
import { addExpence } from "../api/expensesApi"

export default function AddExpencePage() {

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: ""
  })

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState("")

  const [error, setError] = useState("")

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    setSuccess("")

    setError("")

    try {

      const res = await addExpence(form)

      const data = res.data

      if (data.error) {

        setError(data.message)

      } else {

        setSuccess("Expense Added Successfully")

        setForm({
          title: "",
          amount: "",
          category: ""
        })
      }

    } catch (err) {

      setError("Something went wrong")

      console.log(err)

    } finally {

      setLoading(false)
    }
  }

  return (

    <div>

      <h1 className="page-title">
        Add Expense
      </h1>

      <div className="card add-expense-card">

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Expense Title</label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter expense title"
              required
            />

          </div>

          <div className="form-group">

            <label>Amount</label>

            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              required
            />

          </div>

          <div className="form-group">

            <label>Category</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>

              <option value="Food">Food</option>

              <option value="Travel">Travel</option>

              <option value="Shopping">Shopping</option>

              <option value="Other">Other</option>

            </select>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="add-expense-btn"
          >
            {loading ? "Adding..." : "Add Expense"}
          </button>

          {success && (
            <p className="msg-success">
              {success}
            </p>
          )}

          {error && (
            <p className="msg-error">
              {error}
            </p>
          )}

        </form>

      </div>

    </div>
  )
}