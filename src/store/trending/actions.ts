import { Commit } from 'vuex';
import { getTrandingFeed } from "@/services/getTrandingFeed";
import firebase from "firebase/app"


export const actions = {
  async GET_TRENDING_FEED({ commit }: { commit: Commit }) {
    const trending = await getTrandingFeed();

    localStorage.setItem("trendingFeedApi", JSON.stringify(trending));
    commit("setTrendingInfo", trending);
  },



// ------------------ TEMPORARY -----------------------------------
  async CREATE_TRENDING_FEED({ }, data) {
    try {
      return await firebase
        .database()
        .ref(`/trendings/`)
        .set(data)

    } catch (error) {
      console.log(error.message, 'error')
      throw error
    }
  },
// ------------------ TEMPORARY -----------------------------------
async FETCH_TRENDING_FEED({ commit }) {
    try {
      const trendings =
        (
          await firebase
            .database()
            .ref(`/trendings/`)
            .once('value')
        ).val() || {}
      commit('setTrendingInfo', trendings)
      return trendings

    } catch (error) {
      throw error
    }
  },
// ----------------------------------------------------------------
}
