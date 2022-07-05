import React from 'react';
import Table from 'react-bootstrap/Table';

export default class Kolomn extends React.Component {
    render(){
        return(
            <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h6 class="fs-5">Skills yang Bisa</h6>
                <p class="fw-light"> 
                            <ul>
                                React Native
                            </ul>
                            <ul>
                                React JS
                            </ul>
                            <ul>
                                HTML
                            </ul>
                            <ul>
                                XAMPP
                            </ul>
                </p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h6 class="fs-5">Skills baru belajar</h6>
                <p class="fw-light">
                    <ul>
                        Laravel
                    </ul>
                    <ul>
                        Code Igniter 4
                    </ul>
                    <ul>
                        Figma
                    </ul>
                    <ul>
                        Draw.io
                    </ul>
                </p>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
                <Table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Yohannesk</td>
                    <td>Sleman</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Wildan</td>
                    <td>Batam</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Arya</td>
                    <td>Yogya</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
        )
    }
} 
