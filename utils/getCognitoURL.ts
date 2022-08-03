const COGNITO_CLIENT_IDS: {[key: string]: string} = {
    'localhost': '5178lcjm4qujk829oag8mhp0ad',
    'sit': 'add-later',
    'www.fremontmi.com': '3r2olb3kdl0k5jcsg4jo57kfr3'
}
type A = {
    HOME: string;
    DASHBOARD: string;
}
const COGNITO_REDIRECT_URIS: {[key: string]: A} = {
    'localhost': {
        HOME: 'http%3A%2F%2Flocalhost:3000',
        DASHBOARD: 'http%3A%2F%2Flocalhost:3000%2Fdashboard'
    },
    'sit': {
    HOME: 'http%3A%2F%2Flocalhost:3000',
    DASHBOARD: 'http%3A%2F%2Flocalhost:3000%2Fdashboard'
    },
    'www.fremontmi.com':  {
        HOME: 'http%3A%2F%2Flocalhost:3000',
        DASHBOARD: 'http%3A%2F%2Flocalhost:3000%2Fdashboard'
    },
}

type B = {
    login: string;
    register: string;
    logout: string;
}
const getCognitoURL = (hostname: string): B => {
    return {
        login: `https://fremontmi.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=${COGNITO_CLIENT_IDS[hostname]}&response_type=code&scope=email+openid+phone&redirect_uri=${COGNITO_REDIRECT_URIS[hostname]?.DASHBOARD}`,
        register: `https://fremontmi.auth.us-east-2.amazoncognito.com/signup?client_id=${COGNITO_CLIENT_IDS[hostname]}&response_type=code&scope=email+openid+phone&redirect_uri=${COGNITO_REDIRECT_URIS[hostname]?.DASHBOARD}`,
        logout: `https://fremontmi.auth.us-east-2.amazoncognito.com/logout?client_id=${COGNITO_CLIENT_IDS[hostname]}&logout_uri=${COGNITO_REDIRECT_URIS[hostname]?.HOME}`
    };
}

export default getCognitoURL;
