import { http } from "@/api/rapidapi";
import firebase from "firebase/app"

const demoFeed = require("@/api/json/feed.json");

export const getTrandingFeed = async () => {

  try {
    const trendings =
      (
        await firebase
          .database()
          .ref(`/trendings/`)
          .once('value')
      ).val() || {}

    return trendings

    // demo data for app
    return demoFeed;

    // api is snot working right now
    await http.get("/trending/feed").then((res: any) => {
      return res.data
    });

  } catch (error) {
    console.log(error);
    throw error
  }
};
