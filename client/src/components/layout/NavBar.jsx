import React, { Component } from "react";
import { connect } from "react-redux";
import { navBarTheme } from "../../../public/CSS/themes";
import { browserHistory } from "react-router";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { setToken } from "../../reducers/authReducer";
import { toggleMenu } from "../../reducers/dashboardReducer";
import Link from "@material-ui/core/Link";
import { fetchRequest } from "../../reducers/asyncRequestReducer";
import { setProfile } from "../../reducers/profileReducer";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import history from "../../../../server/history";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import DashboardMenu from "./DashboardMenu";

class NavBar extends Component {
  state = {
    anchorEl: null,
    alertAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleAlertMenuOpen = event => {
    this.setState({ alertAnchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleAlertMenuClose = () => {
    this.setState({ alertAnchorEl: null });
  };

  handleLogOut = e => {
    console.log(this.props);
    e.preventDefault();
    //remove token from local storage
    this.props.setToken({});
    //remove token from store
    this.props.fetchRequest({
      type: "get",
      url: "/users/logout",
      data: {}
    });
    //remove profile data from store
    this.props.setProfile({});
    this.handleMenuClose();
  };
  handleGoToProfile = e => {
    e.preventDefault();
    this.handleAlertMenuClose();
    history.push("/profile");
    console.log("handle profile: ", this.props.user);
  };

  render() {
    const alerts = this.props.profile ? this.props.profile.alerts : null;
    const alertLength = alerts ? Object.keys(alerts).length : null;
    const { anchorEl, alertAnchorEl } = this.state;
    const { classes } = this.props;
    const isProfileMenuOpen = Boolean(anchorEl);
    const isAlertMenuOpen = Boolean(alertAnchorEl);
    console.log(classes.root);

    const createAlerts = () => {
      return alerts
        ? Object.values(alerts).map((alert, i) => (
            <MenuItem onClick={this.handleAlertMenuClose} key={i}>
              {alert}
            </MenuItem>
          ))
        : null;
    };
    const renderProfileMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isProfileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={e => this.handleGoToProfile(e)}>Profile</MenuItem>
        <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
      </Menu>
    );
    const renderAlertMenu = (
      <Menu
        anchorEl={alertAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isAlertMenuOpen}
        onClose={this.handleAlertMenuClose}
      >
        {createAlerts()}
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Body Transformation Tracker
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                aria-owns={isAlertMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleAlertMenuOpen}
                color="inherit"
              >
                {alerts && (
                  <Badge badgeContent={alertLength} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                )}
              </IconButton>
              <IconButton
                aria-owns={isProfileMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderProfileMenu}
        {renderAlertMenu}
        <div className={classes.toolbar} />
        <DashboardMenu />
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { user, request, profile } = state;
  return {
    user: user,
    profile: profile,
    errors: request.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: info => dispatch(setToken(info)),
    fetchRequest: info => dispatch(fetchRequest(info)),
    toggleMenu: () => dispatch(toggleMenu()),
    setProfile: info => dispatch(setProfile(info))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(navBarTheme)(NavBar));
