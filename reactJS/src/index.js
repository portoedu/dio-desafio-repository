import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function primeiroJSX() {
    return (
        <div className="teste">
            Eduardo
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
