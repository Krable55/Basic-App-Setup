import { fade } from "@material-ui/core/styles/colorManipulator";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme } from "@material-ui/core/styles";

// export const theme = createMuiTheme({
//   palette: {
//   },
//   // typography: { useNextVariants: true },
// })
export const appBasicStyle = theme => ({
  appContainer: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    marginTop: "-60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});
export const loginTheme = theme => ({
  main: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    marginTop: "-60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  signUp: {
    paddingTop: theme.spacing.unit,
    textAlign: "center"
  },
  showPassword: {
    color: "#757575"
  },
  avatar: {
    fontSize: "large",
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit
  },
  link: {
    variant: "body1",

    marginLeft: theme.spacing.unit / 2
  }
});

export const signUpTheme = theme => ({
  main: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    marginTop: "-60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 300,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  controlArea: {
    marginTop: 8,
    flexDirection: "row",
    flex: 1,
    display: "flex"
  },
  link: {
    variant: "body1",
    marginLeft: theme.spacing.unit / 2
  },
  dob: {
    marginTop: 8,
    marginRight: theme.spacing.unit,
    width: "100%",
    justifyContent: "left"
  },
  showPassword: {
    marginTop: 8
  }
});

export const basicNavBarTheme = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing.unit * 2
  },
  title: {
    flexGrow: 1,
    color: "white"
  }
});

export const drawerMenuTheme = theme => ({
  root: {
    height: `240px`,
    marginTop: "60px"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  toolbar: theme.mixins.toolbar
});

const drawerWidth = 240;
export const dashBoardTheme = theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: 0,
    marginLeft: -1
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});
export const navBarTheme = theme => ({
  root: {
    width: "100%",
    padding: 0,
    margin: 0
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});
