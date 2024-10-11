import axios from "axios";
export const AUTH = "AUTH";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";

// Action creators
export const auth = (user) => ({ type: AUTH, payload: user });
export const authLoading = (status) => ({
  type: AUTH_LOADING,
  payload: status,
});
export const authError = (status) => ({ type: AUTH_ERROR, payload: status });

// Async action
export const authFunction = (data, URL) => (dispatch) => {
  dispatch(authLoading(true));
  axios
    .post(URL, data)
    .then(({ data }) => {
      console.log("Login response:", data); // Log the response for debugging

      // Assuming the API returns a structure like { token, user }
      if (data.token) {
        dispatch(auth(data.user)); // Dispatch the user data
        document.cookie = `Bearer=${data.token}`; // Set cookie
        localStorage.setItem("token", JSON.stringify(data)); // Store token
        dispatch(authLoading(false));
        dispatch(authError(false)); // Reset any error state
      } else {
        dispatch(authError(true)); // Handle case where token is not returned
      }
    })
    .catch((err) => {
      console.error("Login error:", err); // Log full error
      dispatch(authError(true));
      dispatch(authLoading(false));
    });
};
