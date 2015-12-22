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

    handleInputChange: function() {
      UserActions.setType('beach');
      this.context.router.transitionTo('week');
      console.log(inputValue)
      if (inputValue.toUpperCase() == "SNOW") {
        this.context.router.transitionTo('result');
      }
    },

    render() {
        var inputValue = this.state.value;
        return (
            <div className="row section-type">
                <div className="col s12 section-type__choice section-type__choice--beach">
                  <h1>
                    Feathers, I am as light,
                    But quite heavy if squeezed tight.
                    I am seen as clean and pure,
                    but often talked about with dirty terms.
                    What am I?
                  </h1>
                </div>
                <div className="col s12 section-type__choice section-type__choice--beach">
                    <div onClick={this.handleClickBeach} className="section-type__choice__bg">
                        <input type="text" value={inputValue} onChange={this.handleInputChange} defaultValue="Answer!" />
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;