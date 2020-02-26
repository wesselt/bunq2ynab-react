import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import Config from './Config';

class Login extends React.Component {
  render() {
    const url = `https://app.youneedabudget.com/oauth/authorize?` +
      `client_id=${Config.ynabClientId}&` +
      `redirect_uri=${Config.ynabRedirectUrl}&` +
      `response_type=code`;
    return (
      <header className="App-header">
        <Button variant="primary" href={url}>
          Login with YNAB</Button>
      </header>
    )
  }
}

class Show extends React.Component {
  render() {
    return (
      <header className="App-header">
        {this.props.token}
      </header>
    )
  }
}

function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const ynabAccessToken = params.get('access_token');
  console.log(ynabAccessToken);
  if (ynabAccessToken) {
    return <Show token={ynabAccessToken} />;
  } else {
    return <Login />;
  }
}

export default App;
