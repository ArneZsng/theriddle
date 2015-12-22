'use strict';

/* global localStorage */

import React from 'react';
import Reflux from 'reflux';

import {constants} from '../constants/constants.js';
import rp from 'axios';

import UserActions from '../actions/UserActions.js';

const UserStore = Reflux.createStore({

    init: function () {
        this.listenTo(UserActions.setType, this.setType);
        this.listenTo(UserActions.setWeek, this.setWeek);
        this.listenTo(UserActions.setDestination, this.setDestination);

        this.data = {
        };
    },

    getInitialState: function () {
        return this.data;
    }
});

export default UserStore;
