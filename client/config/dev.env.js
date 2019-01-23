'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API_KEY: '"AIzaSyAL_YC3H0iSwhk1ppyF9jUmDQpmgnjPtW4"',
  VUE_APP_AUTH_DOMAIN: '"test-vue-ac332.firebaseapp.com"',
  VUE_APP_DATABASE_URL: '"https://test-vue-ac332.firebaseio.com"',
  VUE_APP_PROJECT_ID: '"test-vue-ac332"',
  VUE_APP_STORAGE_BUCKET: '"test-vue-ac332.appspot.com"',
  VUE_APP_MESSAGING_SENDER_ID: '"633252175476"'
})
