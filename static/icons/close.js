import React, {Component} from 'react';
import "./styles";

// https://www.flaticon.com/free-icon/cancel_130887
class  IconClose extends Component {
    render() {
        return (
            <svg className={"icon " + (this.props.className ? this.props.className : "")}
                onClick={(e) => {this.props.onClick(e)}} version="1.1" x="0px" y="0px" viewBox="0 0 241.171 241.171">
                <g>
                    <path id="Close" d="M138.138,120.754l99.118-98.576c4.752-4.704,4.752-12.319,0-17.011c-4.74-4.704-12.439-4.704-17.179,0
                        l-99.033,98.492L21.095,3.699c-4.74-4.752-12.439-4.752-17.179,0c-4.74,4.764-4.74,12.475,0,17.227l99.876,99.888L3.555,220.497
                        c-4.74,4.704-4.74,12.319,0,17.011c4.74,4.704,12.439,4.704,17.179,0l100.152-99.599l99.551,99.563
                        c4.74,4.752,12.439,4.752,17.179,0c4.74-4.764,4.74-12.475,0-17.227L138.138,120.754z"/>
                </g>
            </svg>
       
        )
    }
    
}

export default IconClose;