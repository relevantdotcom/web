import Button from "../../Button/Button"
import { Icon, IconComponentCollection } from "../../Icon/Icon"
import {
  LoginSocialFacebook,
  LoginSocialGoogle,
  LoginSocialTwitter,
} from "reactjs-social-login"

export default function AuthButton({
  title,
  iconType,
  onClick,
  clientId,
  redirectURI,
  onSuccess,
  onError,
  provider,
}: {
  title: string
  iconType: keyof typeof IconComponentCollection
  onClick: () => void
  clientId: string
  redirectURI: string
  onSuccess: (data: any) => any
  onError: (data: any) => any
  provider: string
}) {
  const ButtonComponent = (
    <Button onClick={onClick} variant={"outlined"} apply={"auth"}>
      <Icon type={iconType} />
      <span>{title}</span>
    </Button>
  )

  if (provider === "google")
    return (
      <LoginSocialGoogle
        client_id={clientId}
        // onLoginStart={onLoginStart}
        redirect_uri={redirectURI}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={onSuccess}
        onReject={onError}
      >
        {ButtonComponent}
      </LoginSocialGoogle>
    )

  if (provider === "facebook")
    return (
      <LoginSocialFacebook
        appId={"1654881418263252"}
        fieldsProfile={
          "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
        }
        // onLogoutSuccess={onSuccess}
        redirect_uri={redirectURI}
        onResolve={onSuccess}
        onReject={onError}
      >
        {ButtonComponent}
      </LoginSocialFacebook>
    )

  if (provider === "twitter")
    return (
      <LoginSocialTwitter
        client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ""}
        // client_secret={process.env.REACT_APP_TWITTER_V2_APP_SECRET || ''}
        redirect_uri={redirectURI}
        onResolve={onSuccess}
        onReject={onError}
      >
        {ButtonComponent}
      </LoginSocialTwitter>
    )

  return null
}
