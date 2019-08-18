import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import finisherListStore from './finisher_list/finisher-store';
import applicationStore from './application/application-store';

export default new Vuex.Store({
  modules : {
    finisherList: finisherListStore,
    application: applicationStore
  }
})
