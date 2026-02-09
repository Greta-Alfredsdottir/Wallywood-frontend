import { useContext, useState } from "react";
import { Grid } from "../../components/grid/grid";
import { Input } from "../../components/input/input";
import { Submit } from "../../components/submit/submit";
import { AuthContext } from "../../context/authcontext";

export function Login() {
  const [error, setError] = useState<string | null>(null);
  const { userData, setUserData } = useContext(AuthContext);

  function postLogin(e: React.SubmitEvent) {
    e.preventDefault();
    // Gem input values
    const userName = e.target.email.value;
    const passWord = e.target.password.value;

    // Opret body (URLsearchParams)
    const body = new URLSearchParams();

    //append input values to body

    body.append("usename", userName);
    body.append("password", passWord);

    // Post body til backend server og håndter response (success/error)
    fetch("http://localhost:3000/login", { method: "POST", body: body })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setError("");
      })
      .catch((error) => {
        console.error("Error logging in: ", error);
        setError("Der opstod en fejl - prøv igen");
      });
  }
  console.log("UserData: ", userData);

  return (
    <>
      {userData && (
        <b>
          Velkommen {userData.user.firstname} {userData.user.lastname}
        </b>
      )}
      {error && <b>{error}</b>}
      <form style={{ width: "30vw" }} onSubmit={(e) => postLogin(e)}>
        <Grid gtr={"1fr 1fr 1fr"} gap={8}>
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <Submit value="Login" />
        </Grid>
      </form>
    </>
  );
}
