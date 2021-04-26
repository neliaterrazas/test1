import React from 'react';
import '../App.css';


class BoxOne extends React.Component {

    render(){
        return (
            <div>
                <style jsx>{`
                .one {
                    width: 50%;
                }
                .BoxOne {
                    display: flex;
                    flex-direction: row-reverse;
                    min-width: 100%;
                    min-height: 100%;
                    border: 1px solid black;
                    /* background-color: green; */
                }
                `}</style>
                <div className="BoxOne">
                    <button className="one">1</button>
                    <button className="one">2</button>
                </div>
            </div>

        );
    }
}


export default BoxOne;
