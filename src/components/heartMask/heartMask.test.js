import React from "react";
import HeartMask from "./heartMask";
import renderer from "react-test-renderer";

test("HeartMask", () => {
  const component = renderer.create(
    <HeartMask className="heart">
      <div>children</div>
    </HeartMask>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
