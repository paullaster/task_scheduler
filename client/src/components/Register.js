import React, { Fragment, useState } from "react";
import { Link} from "react-router-dom";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    phone: "",
    password: "",
    roles: ""
  });

  const { phone, password, roles} = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { phone, password, roles };
      const response = await fetch(
        "/personnel/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();
      console.log(parseRes);

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="phone"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="role"
          value={roles}
          placeholder="roles"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/login">login</Link>
    </Fragment>
  );
};

export default Register;
