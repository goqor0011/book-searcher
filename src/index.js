import app from "./app.js"

window.$ = (selector) => document.querySelector(selector)

const root = $('#root')

google.books.load()


app(root)


