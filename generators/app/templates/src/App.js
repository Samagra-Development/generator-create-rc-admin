import * as React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./essentials/Dashboard";
import authProvider from "./essentials/authProvider";
import RESTdataProvider from "./essentials/RESTdataProvider";
import './app.css';
import { FieldList, FieldCreate, FieldEdit } from "./components/fields.js";
import buildGraphQLProvider from 'ra-data-graphql-simple';

function App() {
  const dataProviderType = "<%=api_type%>".toUpperCase();
  const entities_array = "<%=entities%>".split(",");
  const [dataProvider, setDataProvider] = React.useState(null);
  React.useEffect(() => {
    buildGraphQLProvider({ clientOptions: { uri: 'http://localhost:8000' } })
      .then(graphQlDataProvider => setDataProvider(() => graphQlDataProvider));
  }, []);
  const apiType = {
    "REST" : RESTdataProvider,
    "GRAPHQL" : dataProvider
  }
  if (!dataProvider) return <p>Loading...</p>;
  return (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={apiType[`${dataProviderType}`]}>
      {entities_array.map((item, index) => {
        return <Resource name={item} key={index} list={FieldList} create={FieldCreate} edit={FieldEdit} />
      })}
    </Admin>)
}

export default App;
