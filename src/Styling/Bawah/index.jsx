import React from 'react';
import Card from 'react-bootstrap/Card';
import Formulir from './forms';

export default class Bawah extends React.Component {
    render(){
        return(
        <div>
        <div class="container mt-5" id="contact">
        <h3 class="fs-bold fs-2 p-4 text-center mb-3">Contact</h3>
  
            <Card>
                <Card.Body>
                    <Formulir />
                </Card.Body>
            </Card>
        </div>
      <div class="container-fluid bg-dark mb-0 mt-5">
        <footer>
            <p class="text-white text-center footer">
                &copy; 2022 Aries, Inc. All rights reserved.
            </p>
        </footer>
      </div>
        </div>
        )
    }
} 