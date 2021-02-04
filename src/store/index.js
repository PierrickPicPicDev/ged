import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    callingAPI: false,
    searching: '',
    serverURI: 'http://10.110.1.136:8080',
    user: null,
    token: null,
    userInfo: {
      messages: [
        {
          id: 1,
          title: 'Support Team',
          body: 'Why not consider this a test message?',
          createdAt: '17 min ago',
        },
      ],
      notifications: [
        {
          id: 1,
          title: 'Birthday Reminder',
          body: 'Today is Brians birthday.',
          createdAt: 'just now',
          readAt: null,
        },
        {
          id: 2,
          title: 'Bank Holiday in London',
          body: 'Our office in London has a bank holiday today. Do not expect them to answer the phone.',
          createdAt: '4 hours ago',
          readAt: null,
        },
        {
          id: 3,
          title: 'Birthday Reminder',
          body: 'Today is Christians birthday.',
          createdAt: '27 days ago',
          readAt: '2018-08-12 00:00:00',
        },
        {
          id: 4,
          title: 'Birthday Reminder',
          body: 'Today is Tanjas birthday.',
          createdAt: '29 days ago',
          readAt: '2018-08-12 00:00:00',
        },
        {
          id: 5,
          title: 'Sales Bonus received',
          body: 'You received your monthly sales bonus of 3%. This month you made $2,700 extra!',
          createdAt: '7 hours ago',
          readAt: null,
        },
      ],
      tasks: [],
    },
  },
  mutations: {
    TOGGLE_LOADING(state) {
      state.callingAPI = !state.callingAPI;
    },
    TOGGLE_SEARCHING(state) {
      state.searching = (state.searching === '') ? 'loading' : '';
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
  },
  modules: {
  },
});
