import React from "react";
import Atas from "./Atas";
import Bawah from "./Bawah";
import Kolomn from "./Kolomn";
import AtasTengah from "./Tengah";
import TengahKonten from "./Tengah Konten";


export default class Styling extends React.Component {
    render(){
        return(
            <div>
                <Atas />
                <AtasTengah />
                <TengahKonten />
                <Kolomn />
                <Bawah />
            </div>
        )
    }
}