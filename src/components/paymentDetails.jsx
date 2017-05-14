import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import env from '../../env.json';

class PaymentDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentAmount: '',
    }
  }

  componentDidMount() {
    var that = this;
    // Create a Stripe client
    var stripe = Stripe(env.stripe);

    // Create an instance of Elements
    var elements = stripe.elements();

    // Custom styling can be passed to options when creating an Element.
    // (Note that this demo uses a wider set of styles than the guide below.)
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }

    var stripeTokenHandler = function(token) {
      // Insert the token ID into the form so it gets submitted to the server
      const form = document.getElementById('payment-form');
      const hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'stripeToken');
      hiddenInput.setAttribute('value', token.id);
      form.appendChild(hiddenInput);

      // Submit the form
      form.submit();
    }

    // Create an instance of the card Element
    var card = elements.create('card', {style: style});

    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element');

    // Handle real-time validation errors from the card Element.
    card.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
      console.log('hello?')
      event.preventDefault();

      //update global payment remaining and total paid here

      that.setState({
        paymentAmount: '',
      })
      // stripe.createToken(card).then(function(result) {
      //   if (result.error) {
      //     // Inform the user if there was an error
      //     var errorElement = document.getElementById('card-errors');
      //     errorElement.textContent = result.error.message;
      //     console.log('error? ', result.error)
      //   } else {
      //     // Send the token to your server
      //     console.log('made it here!')
      //     stripeTokenHandler(result.token);
      //   }
      // });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <TextField
              fullWidth={true}
              hintText="$ Payment Amount"
              value={this.state.paymentAmount}
              onChange={(e) => {
                this.setState({
                  paymentAmount: e.target.value,
                })
              }}
            /><br />
            <form id="payment-form">
              <div className="form-row">
                <h5 style={{textAlign: "center"}} htmlFor="card-element">
                  Credit or debit card
                </h5>
                <div id="card-element">
                </div>
                <div id="card-errors" role="alert"></div>
              </div>
              <button type="submit" className="btn btn-large">Submit Payment</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentDetails;