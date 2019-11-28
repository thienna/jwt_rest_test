Feature('Basic Operations');
const assert = require('assert');
var bearer_token = "";

Scenario('get all gai xinh', async (I) => {
  let result = await I.sendGetRequest('/gaixinh');
  assert.equal(result.data.exception, "Unauthorized");
});

Scenario('login failed', async (I) => {
  let login = await I.sendPostRequest('/auth',
    { 
      'username': 'bad user', 
      'password': 'bad password' 
    }
  );
  assert.equal(login.data.exception,'AuthenticationFailed');
});


Scenario('login sucess', async (I) => {
  let login = await I.sendPostRequest('/auth',
    { 
      'username': 'user1', 
      'password': 'abcxyz' 
    }
  );
  access_token = login.data.access_token;
  bearer_token = 'Bearer ' + access_token;
  let gaixinh = await I.sendGetRequest('/gaixinh',
    { 
      'Authorization':  bearer_token
    }
  );
  assert.ok(gaixinh.hasOwnProperty('data'));
});


Scenario('get all gai xinh2', async (I) => {
  let result = await I.sendGetRequest('/gaixinh',
  { 
    'Authorization': bearer_token
  }
  );
  assert.ok(result.hasOwnProperty('data'));
});