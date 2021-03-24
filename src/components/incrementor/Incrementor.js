import React from 'react'

export default class Incrementor extends React.Component {

    state = {
        counter: 0
    }

    handleClick = () => {
        // this.setState((prevState)=>({
        //     counter: prevState.counter + 1
        // }))

        console.log('a');

        fetch("http://localhost:3000/listinfdjsklfjdslkjkfkldsj")
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp);
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))
        
        console.log('e');

        // a, e, b, d
    }

    render() {
        return (
            <div id="incrementor">
                <button onClick={this.handleClick}>
                    Click me to increment counter
                </button>
                <div id="counter">
                    {this.state.counter}
                </div>
            </div>
        )
    }
}