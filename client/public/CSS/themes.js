import { fade } from "@material-ui/core/styles/colorManipulator";
import grey from "@material-ui/core/colors/grey";
import { createMuiTheme } from "@material-ui/core/styles";

// export const theme = createMuiTheme({
//   palette: {
//   },
//   // typography: { useNextVariants: true },
// })
export const loginTheme = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
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
    width: "auto",
    display: "block", // Fix IE 11 issue.
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
    justifyContent: "left",
  },
  showPassword: {
    marginTop: 8,
  },
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
  // search: {
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: fade(theme.palette.common.white, 0.25)
  //   },
  //   marginRight: theme.spacing.unit * 2,
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing.unit * 3,
  //     width: "auto"
  //   }
  // },
  // searchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // inputRoot: {
  //   color: "inherit",
  //   width: "100%"
  // },
  // inputInput: {
  //   paddingTop: theme.spacing.unit,
  //   paddingRight: theme.spacing.unit,
  //   paddingBottom: theme.spacing.unit,
  //   paddingLeft: theme.spacing.unit * 10,
  //   transition: theme.transitions.create("width"),
  //   width: "100%",
  //   [theme.breakpoints.up("md")]: {
  //     width: 200
  //   }
  // },
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
