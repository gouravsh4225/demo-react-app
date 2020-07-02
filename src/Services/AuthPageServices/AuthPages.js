import API from "../../utlis/HttpMethod/method";

const AuthPages = {
  Login: function (params) {
    let url = `auth/login`;
    return API.post(url, params);
  },
  SignIn: function (params) {
    return API.get(params);
  },
};

export default AuthPages;
