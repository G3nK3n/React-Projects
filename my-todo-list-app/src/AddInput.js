import React from "react";

const InputPage = () => {
  return (
    <div className="input-group col-lg-4 ">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <i className="fa fa-user prefix"></i>
        </span>
      </div>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" icon="user" />
    </div>
  );
}

export default InputPage;