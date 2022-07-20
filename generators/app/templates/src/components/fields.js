import * as React from "react";
import { dummy_array } from "./schemas/schema-faker";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    useRecordContext,
    useResourceContext
} from "react-admin";


const Config = require('./schemas/config.json');
let visibleFields = [];

const FieldTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `${record}` : ''}</span>;
};

const lower_dummy_array = dummy_array.map(item => item.toLowerCase());
// console.log(dummy_array);

export const FieldList = () => {
    const ResourceFields = useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;
    return <List>
        <Datagrid>
        {visibleFields.map((item, index) => {
            if(lower_dummy_array.includes(item.path.toLowerCase()))
                return <TextField source={item.path} label={item.header} key={index}/>
            })}
            <EditButton />
        </Datagrid>
    </List>
};

export const FieldEdit = () => {
    const ResourceFields = useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity === ResourceFields)].fields;
    return (
    
    <Edit>
        <SimpleForm title={FieldTitle}>
        {visibleFields.map((item, index) => {
            if(lower_dummy_array.includes(item.path.toLowerCase()))
                return <TextInput source={item.path} label={item.header} key={index}/>
            })}
        </SimpleForm>
    </Edit>
)};

export const FieldCreate = props => {
    const ResourceFields = useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity === ResourceFields)].fields;
    return(
    <Create {...props}>
        <SimpleForm >
        {visibleFields.map((item, index) => {
                return <TextInput source={item.path} label={item.header} key={index}/>
            })}
        </SimpleForm>
    </Create>
)};
