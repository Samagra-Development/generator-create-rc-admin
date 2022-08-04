import { Sidebar} from 'react-admin';

const adminSideBar = (props) => (
    <Sidebar
        sx={{
            "& .RaSidebar-modal": {
                backgroundColor: "red",
            },
        }}
        {...props}
    />
);
export default adminSideBar;