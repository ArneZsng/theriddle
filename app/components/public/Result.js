'use strict';

import React from 'react';
import Reflux from 'reflux';

import _ from 'lodash';

const Result = React.createClass({
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
                        <h5>
                            Snow, what a lovely representation of the solid aggregate state of H<sub>2</sub>O!
                        </h5>
                        <h6>
                            There are so many different kinds of snow: Fresh, Boot-Packed, Blue, Corn, Dust On Crust, Firm, Groomed, Hard-Packed, Slough, Chowder, and everyone's favorite: Champagne Powder.
                        </h6>
                        <br />
                        <h6>
                            But nevermind all 99 words for snow, here is the important part: Every snow flake is unique and so are you... Wait! Stop! My gosh, this is waaaay too cheesy.
                        </h6>
                        <br />
                        <h6>
                            Here is what I wanted to say: Champagne Pow isn't the same without you. So we are making a trip to Südtirol in March. And you are coming with us!
                        </h6>
                        <br />
                        <br />
                        <a onClick={this.handleClick} className="waves-effect waves-light btn">Restart</a>
                    </div>
                </div>
        );
    }
});

export default Result;
