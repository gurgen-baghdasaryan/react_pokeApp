import React from "react";
import { shallow } from "enzyme";
import PokeList from "./PokeList";

describe("PokeList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PokeList />);
    expect(wrapper).toMatchSnapshot();
  });
});
