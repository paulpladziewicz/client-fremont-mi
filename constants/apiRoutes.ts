import getCognitoURL from "../utils/getCognitoURL";
const API_BASE_URLS: {[key: string]: string} = {
  'localhost': 'https://5hc3ya79b7.execute-api.us-east-2.amazonaws.com/Dev'
}

const API_BASE_URL = API_BASE_URLS[getCognitoURL()];

export const API_ROUTES = {};
