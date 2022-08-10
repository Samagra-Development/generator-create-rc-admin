import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./essentials/authProvider";
import Dashboard from "./essentials/Dashboard";
import Sunbird_DataProvider from "./essentials/Sunbird_DataProvider";
import * as MuiIcons from '@mui/icons-material';
import { FieldList, FieldCreate, FieldEdit } from "./Components/fields";
import adminLayout from "./UI/adminLayout";
const Config = require('./Components/config.json');

function App() {
  const entities_array = Config.map(value => value.entity);
  return (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={Sunbird_DataProvider} layout={adminLayout}>
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
