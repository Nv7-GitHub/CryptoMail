import { client } from ".";
import { Null } from "../pb/cryptomail_pb";
import { handleError } from "./util";

export async function authenticate(): Promise<void> {
  return new Promise<void>((resolve, _) => {
    client.isLoggedIn(new Null(), (err, res) => {
      if (err) {
        handleError(err);
        return;
      }
  
      const loggedIn = res.getValue();
      if (!loggedIn) {
        client.authURL(new Null(), (loginErr, loginRes) => {
          if (loginErr) {
            handleError(loginErr);
            return;
          }
  
          const url = loginRes.getValue();
          location.replace(url);
        })
      } else {
        client.makeService(new Null(), (error, _) => {
          if (error) {
            handleError(error);
          }

          resolve();
        })
      }
    });
  });
}