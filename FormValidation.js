import React, { useState } from 'react';
import validator from 'validator';
import '../formvalidation/formvalidation.css';
import f1 from "../images/f3.jpg";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usererror, setUsererror] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [passerr, setPasserr] = useState(false);
  const [cpasserr, setCpasserr] = useState(false);
  const [btndisabled, setBtndisabled] = useState(true);

  const signupHandle = (e) => {
    e.preventDefault();
    alert(name + " " + email);
  };

  const userHandler = (e) => {
    let item = e.target.value.length;
    if (item < 3) {
      setUsererror(true);
      setBtndisabled(true); // Disable button on error
    } else {
      setUsererror(false);
      setName(e.target.value);
      setBtndisabled(false); // Enable button when all fields are valid
    }
  };

  const emailHandler = (e) => {
    let item = e.target.value;
    if (validator.isEmail(item)) {
      setEmailerr(false);
      setEmail(item);
      setBtndisabled(false); // Enable button when all fields are valid
    } else {
      setEmailerr(true);
      setBtndisabled(true); // Disable button on error
    }
  };

  const passHandler = (e) => {
    let pass = e.target.value;
    if (
      validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      setPasserr(false);
      setPassword(pass);
      setBtndisabled(false); // Enable button when all fields are valid
    } else {
      setPasserr(true);
      setBtndisabled(true); // Disable button on error
    }
  };

  const cnfPass = (e) => {
    let cnfpass = e.target.value;
    if (cnfpass === password) {
      setCpasserr(false);
      setBtndisabled(false); // Enable button when all fields are valid
    } else {
      setCpasserr(true);
      setBtndisabled(true); // Disable button on error
    }
  };

  return (
    <div className='container w-75 d-flex'>
      <div className='formvalid w-50'>
        <form onSubmit={signupHandle}>
          <div class='mb-3'>
            <label for='name' class='form-label'>
              Name
            </label>
            <input
              type='name'
              onChange={userHandler}
              name='password'
              class='form-control'
              id='name'
              aria-describedby='name'
              placeholder='name'
            />
            <div id='emailHelp' class='form-text text-danger'>
              {usererror ? "name should have at least 3 characters" : ""}
            </div>
          </div>

          <div class='mb-3'>
            <label for='exampleInputEmail1' class='form-label'>
              Email address
            </label>
            <input
              type='email'
              onChange={emailHandler}
              autoComplete='off'
              name='email'
              placeholder='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' class='form-text text-danger'>
              {emailerr ? "Invalid Email" : ""}
            </div>
          </div>
          <div class='mb-3'>
            <label for='exampleInputPassword1' class='form-label'>
              Password
            </label>
            <input
              type='password'
              onChange={passHandler}
              name='password'
              autoComplete='off'
              placeholder='Password'
              class='form-control'
              id='exampleInputPassword1'
            />
            <div id='emailHelp' class='form-text text-danger'>
              {passerr
                ?"Invalid Password: minLength:8, minNumbers:1, minSymbols:1, minLowercase:1"
                : ""}
            </div>
          </div>

          <div class='mb-3'>
            <label for='confirmpassword' class='form-label'>
              Confirm password
            </label>
            <input
              type='password'
              onChange={cnfPass}
              name='confirm_password'
              autoComplete='off'
              placeholder='Confirm Password'
              class='form-control'
              id='confirmpassword'
            />
            <div id='emailHelp' class='form-text text-danger'>
              {cpasserr ? "password did not match, please enter the correct password" : ""}
            </div>
          </div>

          <button type='submit' disabled={btndisabled} class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      <div className='m-auto'>
        <img src={f1} className='img-fluid' id='formimg' />
      </div>
    </div>
  );
};

export default FormValidation;