import React, { useState } from "react";
import { constants } from "../../_constants/contstants";

export function LoginPage() {
  const [username, setUsername] = useState(null);
  const [pwd, setPwd] = useState(null);

  function setWithExpiry(key, value, ttl) {
    const now = new Date();

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  const handleSubmit = (e) => {
    //send api request to server
    //authenticate user login/pwd
    //for now redirect everybody
    e.preventDefault();
    if (username === "admin" && pwd === "admin") {
      setWithExpiry(constants.loginKey, true, 10000000);
      window.location.href = "/compose";
    } else {
      window.location.reload();
    }
  };
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          verticalAlign: "middle",
          minHeight: "100vh",
          backgroundColor: "antiquewhite",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            style={{ display: "block" }}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
          />

          <input
            style={{ display: "block" }}
            type="password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            placeholder="password"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
