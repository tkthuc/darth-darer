import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    handleClick(item){
        console.log(item);
    }
    render() {
        return (
            <tr>
                <td><button onClick={this.handleClick.bind(this,this.props.person.id)}>{this.props.person.id}</button></td>
                <td>{this.props.person.name}</td>
                <td>{this.props.person.age}</td>
            </tr>
        );
    }
}

class Hello extends React.Component {

    constructor() {
        super();

        this.state = {
            people:
                [
                    {
                        "id":1,
                        "name":"Foo",
                        "age":"20"
                    },

                    {
                        "id":2,
                        "name":"Bar",
                        "age":"30"
                    },

                    {
                        "id":3,
                        "name":"Baz",
                        "age":"40"
                    }
                ]
        }
    }


    render() {
        var myStyle = {
            fontSize: 15,
            color: '#FF0000'
        }

        return (
            <div style={myStyle}>
                <Header/>
                <table>
                    <tbody>
                    {this.state.people.map((person, i) => <TableRow key = {i} person = {person} />)}
                    </tbody>
                </table>
            </div>)
    }
}

export default Hello;


