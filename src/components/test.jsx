import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  constructor(props) {
    super(props);

    this.reqBody = {
      text: 'Why, hello...',
    }
  }

  componentWillMount() {
    axios.post('/nexmo', this.reqBody)
      .then(function (response) {
        console.log('++++++++', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>Testing</p>
      </div>
    );
  }

}

export default Test;
