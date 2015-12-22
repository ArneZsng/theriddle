'use strict';

import React from 'react';
import Reflux from 'reflux';

import _ from 'lodash';

const Week = React.createClass({
        contextTypes: {
          router: React.PropTypes.func
        },

        getInitialState: function () {
          return {
          };
        },

        handleClick: function() {
            this.context.router.transitionTo('home');
        },

        render() {
            return (
                <div className="row section-result">
                    <div className="card-panel">
                        <h3>
                            Snow, what a lovely representation of the solid aggregate state of H<sub>2</sub>O!
                            <br />
                            There are so many different kinds of snow: Fresh, Boot-Packed, Blue, Corn, Dust On Crust, Firm, Groomed, Hard-Packed, Slough, Chowder, and everyone's favorite: Champagne Powder.
                        </h3>
                        <h5>
                            But nevermind all 99 words for snow, here is the important part: Every snow flake is unique and so are you... Wait! Stop! My gosh, this is waaaay too cheesy.
                        </h5>
                        <br />
                        <h5>
                            Here is what I wanted to say: Champagne Powder isn't the same without you. So we are making a trip to Südtirol in March. And you are coming with us!
                        </h5>
                    </div>
                </div>
        );
    }
});
