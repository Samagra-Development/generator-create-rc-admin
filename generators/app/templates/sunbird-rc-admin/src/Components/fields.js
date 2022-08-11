import * as React from "react";
import * as RA from "react-admin";

const Config = require('./config.json');
const CreateConfig = require('./CreateConfig.json')
let visibleFields = [];

export const FieldList = (props) => {
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;
    return (<RA.List >
        <RA.Datagrid bulkActionButtons={false}
            sx={{
                "& .RaDatagrid-headerCell": {
                    backgroundColor: "gray",
                    fontSize: "120%",
                    fontWeight: "bold"
                },

            }}>
            {visibleFields.map((item, index) => {
                const FieldName = RA[item.type + 'Field'];
                return <FieldName source={item.path} label={item.header} key={index} />
            }
            )}
            <RA.EditButton />
        </RA.Datagrid>
    </RA.List>
    )
}

export const FieldEdit = () => {
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;
    return (
        <RA.Edit>
            <RA.SimpleForm>
                {visibleFields.map((item, index) => {
                    const FieldName = RA[item.type + 'Input'];
                    return <FieldName source={item.path} label={item.header} key={index} />
                }
                )}
            </RA.SimpleForm>
        </RA.Edit>
    )
};

export const FieldCreate = props => {
    const ResourceFields = RA.useResourceContext();
    visibleFields = CreateConfig[CreateConfig.findIndex(x => x.entity.toLowerCase() === ResourceFields.toLowerCase())].fields;

    return (
        <RA.Create {...props}>
            <RA.SimpleForm>
                {visibleFields.map((item, index) => {
                    const FieldName = RA[item.type + 'Input'];
                    return <FieldName source={item.path} label={item.header} key={index} />
                }
                )}
            </RA.SimpleForm>
        </RA.Create>
    )
};
