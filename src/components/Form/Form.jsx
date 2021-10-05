import React from "react";

const Form = () => {



  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>);
};

export default Form;
