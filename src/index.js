import app from "./app.js"

const $ = (selector) => document.querySelector(selector)

const root = $('#root')

app(root)

