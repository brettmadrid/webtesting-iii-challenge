// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";
import Controls from "./Controls";

describe("Controls Module", () => {
  xit("should render on load", () => {
    render(<Controls />);
  });

  xit("should display lock gate text on the button if locked is false and closed is true", () => {
    const locked = false;
    const closed = true;

    const { getByText } = render(<Controls locked={locked} closed={closed} />);
    const text = getByText(/lock gate/i);
    expect(text).toBeInTheDocument();
  });

  xit("should display open gate text on the button if locked is false and closed is true", () => {
    const locked = false;
    const closed = true;

    const { getByText } = render(<Controls locked={locked} closed={closed} />);
    const text = getByText(/open gate/i);
    expect(text).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  })
  
});
