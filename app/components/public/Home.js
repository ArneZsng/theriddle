'use strict';

import React from 'react';
import Reflux from 'reflux';

import UserActions from '../../actions/UserActions.js';
import UserStore from '../../stores/UserStore.js';

const Home = React.createClass({
    mixins: [Reflux.connect(UserStore, 'data')],
    contextTypes: {
      router: React.PropTypes.func
    },

    handleInputChange: function(event) {
      var value = event.target.value
      console.log(value)
      if (value.toUpperCase() == "SNOW") {
        console.log(true)
        this.context.router.transitionTo('result');
      }
    },

    render() {
        var inputValue = this.state.value;
        return (
            <div className="row main">
                <div className="col s12">
                    <h1>
                      Feathers, I am as light,
                      But quite heavy if squeezed tight.
                      I am seen as clean and pure,
                      but often talked about with dirty terms.
                      What am I?
                    </h1>
                </div>
                <div className="col s12">
                    <input type="text" value={inputValue} onChange={this.handleInputChange} defaultValue="Answer!" />
                </div>
            </div>
        );
    }
});

export default Home;
