const authStatus = { isLoggedIn: false };
export default authStatus;
  
  export function login() {
    authStatus.isLoggedIn = true;
  }
  
  export function logout() {
    authStatus.isLoggedIn = false;
  }
  