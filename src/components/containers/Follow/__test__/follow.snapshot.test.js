import { shallow, configure, mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import FollowButton from "../followButton";
import Follow from "../index";

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Follow button component being rendered", () => {
  it("should be a follow button", () => {
    const tree = shallow(<FollowButton />);
    expect(tree).toMatchSnapshot();
  });
});

describe("Follow component being rendered", () => {
  it("should be a follow component", () => {
    const tree = shallow(<Follow />);
    expect(tree).toMatchSnapshot();
  });
});

describe("render the component and check if all items exist", () => {
  const store = mockStore({
    count: {
      following_count: 0,
      followers_count: 0
    }
  });
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <FollowButton />
      </BrowserRouter>
    </Provider>
  );

  it("Should render all child elements correctly", () => {
    expect(wrapper.find(".button").exists()).toBe(true);
  });

  it("Should simulate click", () => {
    const submitButton = wrapper.find("button");
    submitButton.simulate("click");
  });
});
