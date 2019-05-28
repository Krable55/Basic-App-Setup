import React, { Component } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { dashBoardMenuTheme } from "../../../public/CSS/themes";
import { fetchRequest } from "../../reducers/asyncRequestReducer";
import { setProfile } from "../../reducers/profileReducer";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import NavBar from "./NavBar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

class DashboardMenu extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchRequest({
      type: "get",
      url: "/users/profile",
      data: this.props.user,
      callback: this.props.setProfile
    });
  }

  render() {
    const { classes, menu, user } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={menu ? classes.drawerOpen : classes.drawerClose}
          classes={{
            paper: menu ? classes.drawerOpen : classes.drawerClose
          }}
          open={menu}
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {["Meals", "Macros", "Recipes"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Workouts", "Exercises", "Tracker"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
        </main> */}
      </div>
    );
  }
}
DashboardMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  menu: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
  const { classes, user, request, dashboard } = state;
  return {
    user: user,
    classes: classes,
    errors: request.errors,
    menu: dashboard.menu
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatchEvent(toggleMenu()),
    fetchRequest: info => dispatch(fetchRequest(info)),
    setProfile: info => dispatch(setProfile(info))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(dashBoardMenuTheme)(DashboardMenu));
