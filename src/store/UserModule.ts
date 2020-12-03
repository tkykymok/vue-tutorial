import {User} from '@/classes/user';
import {Commit} from 'vuex';
import {Role} from '@/classes/role';

export default {
  namespaced: true,
  state: {
    user: new User(0,'','','',new Role(0, '', []),[])
  },
  mutations: {
    SET_USER: (state: { user: User }, user: User) => state.user = user
  },
  actions: {
    setUser: ({commit}: { commit: Commit }, user: User) => commit('SET_USER', user)
  },
}