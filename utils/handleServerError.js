const handleServerError = (err) => {
  if (err.response.status === 401) {
    throw new Error(
      "Something wrong with the API Key, go to-- http://nomics.com"
    );
  } else if (err.response.status === 404) {
    throw new Error("API is not responding, Check Internet connection");
  } else {
    throw new Error("Something is wrong");
  }
};
