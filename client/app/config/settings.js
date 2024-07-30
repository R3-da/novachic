import Constants from "expo-constants";
import {
  API_URL,
} from "@env";

import { Logs } from 'expo'

Logs.enableExpoCliLogging()

console.log("API_URL", API_URL)
const settings = {
  dev: {
    apiUrl: API_URL,
  },
  staging: {
    apiUrl: API_URL,
  },
  prod: {

  },
};

const getCurrentSettings = () => {
 /*  // eslint-disable-next-line no-undef
  if (__DEV__) return settings.dev;

  //   ?: Uncomment this if you want to have a seperate config for staging
  if (Constants.manifest.releaseChannel === "staging") return settings.staging; 
*/
  return settings.dev;
};

module.exports = getCurrentSettings();
