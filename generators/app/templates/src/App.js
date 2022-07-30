import * as React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./essentials/Dashboard";
import authProvider from "./essentials/authProvider";
import RESTdataProvider from "./essentials/RESTdataProvider";
import './app.css';
import { FieldList, FieldCreate, FieldEdit } from "./components/fields.js";
import buildGraphQLProvider from 'ra-data-graphql-simple';
import * as MuiIcons from '@mui/icons-material';
const Config = require('./components/schemas/config.json');

function App() {
  const dataProviderType = "<%=api_type%>".toUpperCase();
  const entities_array = Config.map(value => value.entity);
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
        let obj = Config.find(o => o.entity === item);
        let icon_name = obj.icon;
        const IconComponent = () => {
          const Icon = MuiIcons[icon_name];
          return <Icon />
        }
        return <Resource name={item} options={{ label: obj.label }} key={index} list={FieldList} create={FieldCreate} edit={FieldEdit} icon={IconComponent}/>
      })}
    </Admin>)
}

export default App;
