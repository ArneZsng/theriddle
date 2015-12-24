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
                <div className="background">
                </div>
                <div className="col col-sm-offset-1 s10">
                    <h4 className="riddle">
                      Feathers, I am as light,<br />
                      But quite heavy if squeezed tight.<br />
                      I am seen as clean and pure,<br />
                      but often talked about with dirty terms.<br />
                      What am I?<br />
                      <br />
                    </h4>
                    <h4>
                      <input type="text" value={inputValue} onChange={this.handleInputChange} defaultValue="Answer!" />
                    </h4>
                </div>
            </div>
        );
    }
});

export default Home;
