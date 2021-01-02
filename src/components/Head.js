import React from 'react'
import { Spring } from 'react-spring/renderprops';
// import {useSpring, animated} from 'react-spring';

export default function Head() {
    return (
        <Spring
            from = {{ opacity: 0, marginTop: -500 }}
            to = {{ opacity: 1, marginTop: 0}}>
            { props => (
                <div style = {props}>
                    <div style = {c1Style}>
                    <h1>Luna Spice Co</h1>
                    <p>Ea elit cillum cupidatat veniam nostrud magna veniam proident non. 
                Quis culpa proident est dolore. 
                Ex excepteur voluptate esse cillum cupidatat esse aliqua consectetur dolore.</p>
        </div>
                </div>
            )}
        </Spring> 
    )
}

const c1Style = {
    background: 'steelblue', 
    color: 'white',
    padding: '1.5rem'
}
