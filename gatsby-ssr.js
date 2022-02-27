const React = require("react");

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      {element}
      <div id="modal-root" />
    </>
  );
};
