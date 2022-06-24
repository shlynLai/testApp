import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_DtztLq9sR",
  ClientId: "5de9js4c5a6anlm9ai4gqo817m",
};

export default new CognitoUserPool(poolData);
