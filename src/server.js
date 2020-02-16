import express from "express"
import App from './components/App'
import React from 'react'
import {renderToString} from 'react-dom/server'

var app = express();

app.get("/", (req, res) => {
  const list = [1, 2, 3, 4, 5]
  const html = renderToString(<App list={list} />)
  res.send(html)
})
app.listen(3000, function () {
  console.log('server start !')
})
