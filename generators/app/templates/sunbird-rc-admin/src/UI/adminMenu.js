// in src/MyMenu.js
import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';

const adminMenu = (props) => (
    <>
    <img src='https://sunbird.org/images/logo/logo.svg' id="sunbird-logo"/>
    <Menu {...props}>
    </Menu>
    </>
);

export default adminMenu;