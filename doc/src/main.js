/*
Copyright (c) 2016-2017 PointSource, LLC.
MIT Licensed
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

require('script!jquery')
require('script!foundation-sites/dist/js/foundation.js')
require('./loadFoundation.scss');

import App from './App';

import componentList from './componentList';

const router = new VueRouter({
	routes: componentList
});

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: {
    App
  }
})
