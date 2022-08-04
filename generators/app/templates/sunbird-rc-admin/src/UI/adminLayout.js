import { Layout } from 'react-admin';

import adminAppBar from './adminAppBar';
import adminSideBar from './adminSideBar';
import adminMenu from './adminMenu';
const adminLayout = props => <Layout
    {...props}
appBar={adminAppBar}
sidebar = {adminSideBar}
menu = {adminMenu}
/>

export default adminLayout;