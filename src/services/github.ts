import axios from "axios";
const GITHUB_URL = `${process.env.GITHUB_API_URL ?? "https://api.github.com"}/users/${process.env.GITHUB_USERNAME ?? "inupurnomo"}/repos`;
// const GITHUB_URL = `http://victoria-project.test/api/settings`;

export const getRepos = async () => {
  const response = await axios.get(GITHUB_URL);
  const status = response?.status;

  if (status >= 400) {
    return {
      status,
      message: response?.statusText,
    };
  }

  const data = response?.data;

  return {
    status,
    data,
  };
};
