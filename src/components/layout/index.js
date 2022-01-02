import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.backgroundColorpalette.background.dark,
        display: 'flex',
        height: '100vh',
        width: '100vh',
        overflow: 'hidden',
    },
}))

function Layout ({children} = {}) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <div>Menubar</div>
            <div>{children}</div>
            <div>Footer</div>
        </div>
    );
}

export default Layout;