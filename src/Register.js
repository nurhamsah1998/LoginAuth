import React from 'react';

function Register() {
  return (
    <div>
      <form>
        <div>
          <label>name</label>
          <input placeholder="enter here" type="text" />
        </div>
        <div>
          <label>email</label>
          <input placeholder="enter here" type="text" />
        </div>
        <div>
          <label>password</label>
          <input placeholder="enter here" type="password" />
        </div>
      </form>
    </div>
  );
}

export default Register;
