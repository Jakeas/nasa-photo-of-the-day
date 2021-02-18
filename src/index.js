import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'
import theme from "./theme/index"
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
<BrowserRouter><ThemeProvider theme={theme}><App /></ThemeProvider></BrowserRouter>, document.getElementById("root"));
