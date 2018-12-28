import Vue from 'vue'

export default {
  login: function () {
    Vue.$axios.get('login')
  }
}
