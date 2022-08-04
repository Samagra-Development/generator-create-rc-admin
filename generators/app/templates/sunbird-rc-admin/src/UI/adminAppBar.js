// in src/MyAppBar.js
import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@mui/material/Typography';
import { defaultTheme, Layout, ToggleThemeButton } from 'react-admin';
import { createTheme, Box} from '@mui/material';

const darkTheme = createTheme({
    palette: { mode: 'dark' },
});

const adminAppBar = (props) => (
    <AppBar
    color="inherit"
    {...props}
    >

    <Typography
        variant="h5"
        color="inherit"
        className={"title"}
        id="react-admin-title"
        fontWeight="bold"
        width="100%"
    />
    <ToggleThemeButton
            lightTheme={defaultTheme}
            darkTheme={darkTheme}
        />
</AppBar>
);

export default adminAppBar;