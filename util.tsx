import * as React from 'react'
import * as ReactDOM from 'react-dom'

export function sayHello() {
    ReactDOM.render(
        <div>Hello world</div>,
        document.getElementById("container")
    )
}