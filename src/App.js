import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
  render() {
    const ynab_client_id =
              '5f9fa9ef4fb1517961ea9d50498f73a4159a7d0918329ff2aae71bca0b553e06';
    const redirect_url = 'https://bunq2ynab.aule.net/dev';
    const url = `https://app.youneedabudget.com/oauth/authorize?` +
      `client_id=${ynab_client_id}&` +
      `redirect_uri=${redirect_url}&` +
      `response_type=code`;
    return (
      <header className="App-header">
          <Button variant="primary" href={url}>
              Login with YNAB</Button>
      </header>
    )
  }
}

function App() {
  return (
    <div className="App">
        <Login />
    </div>
  );
}

export default App;
