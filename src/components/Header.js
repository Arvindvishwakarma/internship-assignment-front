import React from 'react'
import { Jumbotron } from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Jumbotron style={{textAlign:'center', padding:'20px'}}>
                <h1>Pritam Nursery</h1>
                <h5>Web Development internship</h5>
            </Jumbotron>
        </div>
    )
}
