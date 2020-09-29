const SigninScreen = {
  after_render: () => {},
  render: () => {
    return `
    <div class = "form-container">
      <form id = "signin-form">
        <ul class = "form-items">
          <li>
            <h1>Sign_In</h1>
          </li>
          <li>
            <label for = "email">Email</label>
            <input type = "email" name = "email" id = "email"></input>      
          </li>
          <li>
            <lebel for = "password">Password</lebel>
            <input type = "password"></input>
          </li>
          <li>
            <button type = "buttton" class = "primary">Signin</button>
          </li>
          <li>
            <div>
              New User?
              <a href = "/#/register">Create yuor account</a>
            </div>
          </li>
        </ul>
      </form>
    </div>
    `;  
  },
};
export default SigninScreen;