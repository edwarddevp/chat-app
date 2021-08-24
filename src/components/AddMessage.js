import React from "react";
import PropTypes from "prop-types";

const AddMessage = (props) => {
  let input;

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
          console.log(input.value);
          if (e.key === "Enter") {
            console.log(input.value);
            props.dispatch(input.value, "Me");
            input.value = "";
          }
        }}
        type="text"
        ref={(node) => {
          input = node;
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
