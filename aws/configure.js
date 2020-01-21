export default {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:f59389b7-b99d-4da9-95b8-185eb0353608',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_coVPXKLPD',

    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: '4roh06r403pci87qfo0j6ipuks',
  },
  API: {
    endpoints: [
      {
        name: 'dev',
        endpoint: 'https://jiu4uxhcqc.execute-api.us-east-1.amazonaws.com/dev/',
      },
      {
        name: 'stage',
        endpoint: 'https://jiu4uxhcqc.execute-api.us-east-1.amazonaws.com/dev/',
      },
      {
        name: 'prod',
        endpoint: 'https://jiu4uxhcqc.execute-api.us-east-1.amazonaws.com/dev/',
      },
    ],
  },
};
