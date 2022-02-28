import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { createServer, Model } from "miragejs"

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "teste 1",
          type: "deposit",
          value: 6000,
          category: "cat test1",
          createdAt: new Date("2022-02-25")
        },
        {
          id: 2,
          title: "teste 2",
          type: "withdraw",
          value: 5000,
          category: "cat test2",
          createdAt: new Date("2022-02-22")
        },
        {
          id: 3,
          title: "teste 3",
          type: "withdraw",
          value: 1000,
          category: "cat test3",
          createdAt: new Date("2022-02-21")
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transaction", data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
