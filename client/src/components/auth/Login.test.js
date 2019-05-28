import React from "react";
// import { shallow } from "enzyme";
import { Login } from "./Login";
import { loginTheme } from "../../../../client/public/CSS/themes";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { mount } from "enzyme";
import PropTypes from "prop-types";
// import { createShallow } from "@material-ui/core/test-utils";
import { createMuiTheme } from "@material-ui/core/styles";
import { config } from "../../../../enzyme.config";
function setup(addToProps) {
  // console.log(loginTheme(createMuiTheme()).main);
  const muiTheme = loginTheme(createMuiTheme());
  let props = {
    classes: loginTheme(createMuiTheme()),
    login: {
      password: "",
      email: ""
    }
  };
  props = addToProps ? { ...props, ...addToProps } : props;
  return mount(<Login {...props} />, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object }
  });
}

describe("Login", () => {
  const mockEnterInfo = jest.fn(x => ({ [x.name]: x.value }));
  const mockSubmit = jest.fn();
  const wrapper = setup({
    submit: mockEnterInfo,
    loginAction: mockEnterInfo
  });
  // const wrapper = setup();
  // console.log(
  //   wrapper
  //     .find(".MuiInputBase-input-121")
  //     .first()
  //     .debug()
  // );

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it(`creates a submit button`, () => {
    expect(wrapper.find("Button")).toHaveLength(1);
  });
  it(`creates an input for password and email `, () => {
    expect(wrapper.find("Input")).toHaveLength(2);
  });
  describe(`when the user types into the email input`, () => {
    const userEmail = "JonSnow@kinginthenorth.com";
    it(`calls the loginAction function to update input`, () => {
      wrapper
        .find(".MuiInputBase-input-121")
        .first()
        // .debug()
        .simulate("change", { target: { value: userEmail, name: "email" } });
      expect(mockEnterInfo.mock.calls.length).toBe(1);
      expect(mockEnterInfo.mock.calls[0][0]).toStrictEqual({
        email: "JonSnow@kinginthenorth.com"
      });
    });
  });
  describe(`when the user types into the password input`, () => {
    const userPassword = "password";
    it(`calls the loginAction function to update input`, () => {
      wrapper
        .find(".MuiInputBase-input-121")
        .last()
        .simulate("change", {
          target: { value: userPassword, name: "password" }
        });
      expect(mockEnterInfo.mock.calls.length).toBe(1);
      expect(mockEnterInfo.mock.calls[0][0]).toStrictEqual({
        password: "password"
      });
    });
  });

  describe(`when the user types into the password input`, () => {
    beforeEach(() => {
      wrapper
        .find("button")
        .filter("#submitButton")
        .simulate("click");
    });
    it('dispatches the "handleSubmit()" function', () => {
      expect(mockSubmit.mock.calls.length).toBe(1);
    });
  });
});
