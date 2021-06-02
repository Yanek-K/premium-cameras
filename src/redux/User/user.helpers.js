import { auth } from "./../../firebase/utils";

export const handleResetPasswordAPI = (email) => {
  const config = {
    url: "http://www.premiumcameras.ca",
  };

  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ["Email not found. Please try again"];
        reject(err);
      });
  });
};
