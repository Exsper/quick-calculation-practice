import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      add: {
        right: 0,
        wrong: 0,
        total: 0,
        percent: 0,
        averageTime: 0,
      },
      mul: {
        right: 0,
        wrong: 0,
        total: 0,
        percent: 0,
        averageTime: 0,
      },
      frac: {
        right: 0,
        wrong: 0,
        total: 0,
        percent: 0,
        averageTime: 0,
      },
    };
  },
  mutations: {
    /**
     * @param {*} state
     * @param {Object} ce
     * @param {"add"|"mul"|"frac"} ce.type
     * @param {boolean} ce.isRight
     * @param {number} ce.time
     */
    addCount(state, ce) {
      let type = ce.type;
      let isRight = ce.isRight;
      let time = ce.time;
      if (isRight) state[type].right++;
      else state[type].wrong++;
      state[type].total = state[type].right + state[type].wrong;
      state[type].percent = parseInt(
        (state[type].right * 100) / state[type].total
      );
      state[type].averageTime =
        (state[type].averageTime * (state[type].total - 1) + time) /
        state[type].total;
    },
  },
  actions: {},
  modules: {},
});
