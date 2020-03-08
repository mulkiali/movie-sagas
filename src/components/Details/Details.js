import React, { Component } from 'react';


class Details extends Component {
    handleClick1 = () => {
        this.props.history.push('/edit')
    }
    handleClick2 = () => {
        this.props.history.push('/')
    }
  render() {
    return (
      <div className="Details">
        <p>DETAILS!!!</p>
        <button onClick={this.handleClick2} >Back to List</button><button onClick={this.handleClick1}>Edit</button>
      </div>
    );
  }
}

export default Details;