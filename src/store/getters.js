export const getLists = (state) => state.lists;
export const getDashboards = (state) => state.dashboards;

export const getDashboard = (state) => id => state.dashboards[id];
export const getCard = state => id => state.cards[id];
export const getList = (state) => id => state.lists[id];

export const getCurrentComponent = state => state.list[id];

export const getScore = state => id => state.list[id].score;

