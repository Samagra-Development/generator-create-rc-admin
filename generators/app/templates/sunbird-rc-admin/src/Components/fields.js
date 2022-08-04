import * as React from "react";
import * as RA from "react-admin";
import Sunbird_DataProvider from "../essentials/Sunbird_DataProvider";

const Config = require('./config.json');
const CreateConfig = require('./CreateConfig.json')
let visibleFields = [];

export const FieldList = (props) => {
    let fields_array = [];
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;
    // const fields = Sunbird_DataProvider.getList(ResourceFields, "").then(resp => resp.data);
    // console.log(fields);
    if(ResourceFields=="Student"){
        fields_array = Object.keys({
            "refId1": "",
            "refId2": "",
            "aadhaar": "",
            "firstName": "snehal",
            "middleName": "patil",
            "lastName": "patil",
            "schoolId": "124234",
            "studentPhoneNumber": 235435,
            "studentEmail": "snehal@gmail.com",
            "gender": "female",
            "groupId": "12",
            "socialCategory": "",
            "iscwsn": "",
            "religion": "",
            "singleGirl": "true",
            "weight": "",
            "height": "",
            "bloodGroup": "",
            "birthDate": "",
            "homeless": "true",
            "bpl": "true",
            "migrant": "true",
            "status": "string",
            "fatherFirstName": "",
            "fatherMiddleName": "",
            "fatherLastName": "",
            "fatherPhoneNumber": 0,
            "fatherEmail": "",
            "motherFirstName": "",
            "motherMiddleName": "",
            "motherLastName": "",
            "motherPhoneNumber": 0,
            "motherEmail": "",
            "guardianFirstName": "",
            "guardianMiddleName": "",
            "guardianLastName": "",
            "guardianPhoneNumber": 0,
            "guardianEmail": "",
            "image": "",
            "studentAddress": "",
            "village": "",
            "block": "",
            "district": "",
            "stateId": "",
            "pincode": 0,
            "locationId": "",
            "deactivationReason": ""
          })
    }
    return (<RA.List >
        <RA.Datagrid bulkActionButtons={false}
         sx={{
            "& .RaDatagrid-headerCell": {
                backgroundColor: "gray",
                fontSize: "120%",
                fontWeight : "bold"
            },
       
}}>
        {visibleFields.map((item, index) => {
                const FieldName = RA[item.type+'Field'];
                return <FieldName source={item.path} label={item.header} key={index}/>}
            )}
            <RA.EditButton />
        </RA.Datagrid>
    </RA.List>
    )
}

export const FieldEdit = () => {
    let fields_array = [];
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;
    // const fields = Sunbird_DataProvider.getList(ResourceFields, "").then(resp => resp.data);
    // console.log(fields);
    if(ResourceFields=="Student"){
        fields_array = Object.keys({
            "refId1": "",
            "refId2": "",
            "aadhaar": "",
            "firstName": "snehal",
            "middleName": "patil",
            "lastName": "patil",
            "schoolId": "124234",
            "studentPhoneNumber": 235435,
            "studentEmail": "snehal@gmail.com",
            "gender": "female",
            "groupId": "12",
            "socialCategory": "",
            "iscwsn": "",
            "religion": "",
            "singleGirl": "true",
            "weight": "",
            "height": "",
            "bloodGroup": "",
            "birthDate": "",
            "homeless": "true",
            "bpl": "true",
            "migrant": "true",
            "status": "string",
            "fatherFirstName": "",
            "fatherMiddleName": "",
            "fatherLastName": "",
            "fatherPhoneNumber": 0,
            "fatherEmail": "",
            "motherFirstName": "",
            "motherMiddleName": "",
            "motherLastName": "",
            "motherPhoneNumber": 0,
            "motherEmail": "",
            "guardianFirstName": "",
            "guardianMiddleName": "",
            "guardianLastName": "",
            "guardianPhoneNumber": 0,
            "guardianEmail": "",
            "image": "",
            "studentAddress": "",
            "village": "",
            "block": "",
            "district": "",
            "stateId": "",
            "pincode": 0,
            "locationId": "",
            "deactivationReason": ""
          })
    }
    return (
    <RA.Edit>
        <RA.SimpleForm>
        {visibleFields.map((item, index) => {
                const FieldName = RA[item.type+'Input'];
                return <FieldName source={item.path} label={item.header} key={index}/>}
            )}
        </RA.SimpleForm>
    </RA.Edit>
)};

export const FieldCreate = props => {
    let fields_array = [];
    const ResourceFields = RA.useResourceContext();
    // const fields = Sunbird_DataProvider.getList(ResourceFields, "").then(resp => resp.data);
    // console.log(fields);
    if(ResourceFields=="Student"){
        fields_array = Object.keys({
            "refId1": "",
            "refId2": "",
            "aadhaar": "",
            "firstName": "snehal",
            "middleName": "patil",
            "lastName": "patil",
            "schoolId": "124234",
            "studentPhoneNumber": 235435,
            "studentEmail": "snehal@gmail.com",
            "gender": "female",
            "groupId": "12",
            "socialCategory": "",
            "iscwsn": "",
            "religion": "",
            "singleGirl": "true",
            "weight": "",
            "height": "",
            "bloodGroup": "",
            "birthDate": "",
            "homeless": "true",
            "bpl": "true",
            "migrant": "true",
            "status": "string",
            "fatherFirstName": "",
            "fatherMiddleName": "",
            "fatherLastName": "",
            "fatherPhoneNumber": 0,
            "fatherEmail": "",
            "motherFirstName": "",
            "motherMiddleName": "",
            "motherLastName": "",
            "motherPhoneNumber": 0,
            "motherEmail": "",
            "guardianFirstName": "",
            "guardianMiddleName": "",
            "guardianLastName": "",
            "guardianPhoneNumber": 0,
            "guardianEmail": "",
            "image": "",
            "studentAddress": "",
            "village": "",
            "block": "",
            "district": "",
            "stateId": "",
            "pincode": 0,
            "locationId": "",
            "deactivationReason": ""
          })
    }
    visibleFields = CreateConfig[CreateConfig.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;
    return (
    <RA.Create {...props}>
        <RA.SimpleForm>
        {visibleFields.map((item, index) => {
                const FieldName = RA[item.type +'Input'];
                return <FieldName source={item.path} label={item.header} key={index}/>}
            )}
        </RA.SimpleForm>
    </RA.Create>
)};
