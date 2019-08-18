import * as MutationTypes from './application-store-mutation';

const state = {
    appTheme: {
        isDark: false
    },
    appDrawer: null
};

const mutations = {
    [MutationTypes.TOOGLE_DARK_THEME] (state) {
        var appTheme = state.appTheme;
        appTheme.isDark = !appTheme.isDark;
    }, 
    [MutationTypes.UPDATE_APP_DRAWER] (state, drawer) {
        state.appDrawer = drawer;
    }
};

const actions = {
    [MutationTypes.TOOGLE_DARK_THEME](context){
        context.commit(MutationTypes.TOOGLE_DARK_THEME);
    },
    [MutationTypes.UPDATE_APP_DRAWER](context, drawer){
        context.commit(MutationTypes.UPDATE_APP_DRAWER, drawer);
    }
};

const getters = {
    appTheme: (state) => {
        return state.appTheme;
    },
    appDrawer : (state)=>{
        return state.appDrawer;
    }
};

const applicationStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default applicationStore;