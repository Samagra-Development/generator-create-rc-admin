import * as React from "react";
import { dummy_array } from "./schemas/schema-faker";
import * as RA from "react-admin";


const Config = require('./schemas/config.json');
let visibleFields = [];

const lower_dummy_array = dummy_array.map(item => item.toLowerCase());
// console.log(dummy_array);

export const FieldList = () => {
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;
    return <RA.List>
        <RA.Datagrid>
        {visibleFields.map((item, index) => {
            if(lower_dummy_array.includes(item.path.toLowerCase())){
                const FieldName = RA[item.type+'Field'];
                return <FieldName source={item.path} label={item.header} key={index}/>}
            })}
            <RA.EditButton />
        </RA.Datagrid>
    </RA.List>
};

export const FieldEdit = () => {
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity === ResourceFields)].fields;
    return (
    
    <RA.Edit>
        <RA.SimpleForm>
        {visibleFields.map((item, index) => {
            if(lower_dummy_array.includes(item.path.toLowerCase())){
                const FieldName = RA[item.type+'Input'];
                return <FieldName source={item.path} label={item.header} key={index}/>}
            })}
        </RA.SimpleForm>
    </RA.Edit>
)};

export const FieldCreate = props => {
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity === ResourceFields)].fields;
    return(
    <RA.Create {...props}>
        <RA.SimpleForm >
        {visibleFields.map((item, index) => {
                const FieldName = RA[item.type+'Input'];
                return <FieldName source={item.path} label={item.header} key={index}/>
            })}
        </RA.SimpleForm>
    </RA.Create>
)};
