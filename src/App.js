import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import Routes from "./Routers";
import React from 'react';

function App() {
  return (
    <Layout>
      <Switch>
        {Routes.map((route , index) => (
          <Route {...route} key={index}/>
        ))}
      </Switch>
    </Layout>
  );
}

export default App;
