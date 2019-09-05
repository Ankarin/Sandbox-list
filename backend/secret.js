const secrets = {
    dbUri: "mongodb://localhost:27017/nested_list"
  };
  
  const getSecret = key => secrets[key];
  
  module.exports = getSecret;
  