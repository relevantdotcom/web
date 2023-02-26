import Link from "next/link"
import Button from "../Button/Button"
import {
  ButtonContainer,
  NoAccountWrapper,
  PolicyAgreement,
  SignInBody,
  SignInWithSMsWrapper,
} from "./SignInWithSMs.style"
import AuthButton from "./AuthButton/AuthButton"
import { useCallback, useState } from "react"

export default function SignInWithSMs() {
  const [profile, setProfile] = useState<any>(null)
  const onLoginStart = useCallback(() => {
    alert("login start")
  }, [])

  return (
    <SignInWithSMsWrapper>
      <SignInBody>
        <h1>Access your account</h1>
        <ButtonContainer>
          <AuthButton
            clientId="696907306332-o8j5vnk6oja075fbqio4bsh43jj9dr52.apps.googleusercontent.com"
            provider="google"
            // provider="google"
            // appId="YOUR_APP_ID"
            iconType="google"
            title="Sign in with Google"
            onClick={() => console.log("google sign in")}
            onSuccess={(data: any) => console.log("data is", data)}
            onError={(error: any) => console.log("Error is", error)}
            redirectURI={"https://google.com"}
          />

          <AuthButton
            provider="facebook"
            clientId="696907306332-o8j5vnk6oja075fbqio4bsh43jj9dr52.apps.googleusercontent.com"
            iconType="facebook"
            title="Sign in with Facebook"
            onClick={() => console.log("facebook sign in")}
            onSuccess={(data: any) => console.log("data is", data)}
            onError={(error: any) => console.log("Error is", error)}
            redirectURI={"https://facebook.com"}
          />
        </ButtonContainer>
        <NoAccountWrapper>
          <p>No account?</p>
          <Button onClick={() => console.log("create one")}>Create One</Button>
        </NoAccountWrapper>
      </SignInBody>
      <PolicyAgreement>
        Click {`"Sign in"`} to agree to Relevant&#39;s{" "}
        <Link href={"/terms-of-services"}>Terms of Service</Link> and
        acknowledge that Relevant&#39;s
        <Link href={"/privacy-policy"}>Privacy Policy</Link> that applies to
        you.
      </PolicyAgreement>

      {profile && profile.toString()}
    </SignInWithSMsWrapper>
  )
}
