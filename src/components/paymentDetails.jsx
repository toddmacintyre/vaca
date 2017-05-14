import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import env from '../../env.json';
import FlatButton from 'material-ui/FlatButton';

class PaymentDetails extends Component {
  constructor(props) {
    super(props)
    console.log('props? ', props)
    this.paymentAmount = window.location.search.slice(1) || 10;
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

  redirect = () => {
    this.props.history.push('/main');
  }

  render() {
    return (
      <div className="container wizard">
        <div className="row">
          <h2 style={{textAlign: "center", marginTop: 80}}>How would you like to put in ${this.paymentAmount}/day?</h2>
          <div className="col-xs-12">
            <br />
            <form id="payment-form">
              <div className="form-row">
                <p htmlFor="card-element">
                  Credit or debit card
                </p>
                <div id="card-element">
                </div>
                <div id="card-errors" role="alert"></div>
              </div>
              <br />
              <div className="text-center">
                <p>OR</p>
                <FlatButton
                  style={{textAlign: "center",color: "#EA750A",scale:"scale(1.2)"}}
                  label="ADD A BANK ACCOUNT"
                />
              </div>
              <br />
              <div className="text-center bottom-btn-wrap">
                <FlatButton
                  style={{textAlign: "center"}}
                  label="Confirm Payment"
                  onTouchTap={() => this.redirect()}
                  type="submit"
                />
                <p className="text-center">(Woohoo!)</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentDetails;
