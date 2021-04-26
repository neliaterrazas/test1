import React from 'react';
import '../App.css';

class BoxTwo extends React.Component {

    render(){
        return (
            <div>
                <style jsx>{`
                .two {
                    width: 100%;
                }
                .BoxTwo {
                    display: flex;
                    flex-direction: column;
                    min-width: 100%;
                    min-height: 100%;
                    border: 1px solid black;
                    /* background-color: green; */
                }
                `}</style>
                <div className="BoxTwo">
                    <button className="two">1</button>
                    <button className="two">2</button>
                </div>
            </div>

        );
    }
}


export default BoxTwo;