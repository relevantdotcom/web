import { colors } from "@/src/config"
import styled from "@emotion/styled"
import { color } from "@mui/system"

export const SignInWithSMsWrapper = styled("div")`
  padding: 32px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignInBody = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "IBM Plex Sans";
    color: ${colors.secondary};
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
  }
`

export const ButtonContainer = styled("div")`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  button {
    color: ${colors.primary700};
    font-weight: 600;
    font-size: 15px;
    line-height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`

export const NoAccountWrapper = styled("div")`
  display: flex;
  gap: 10px;
  margin-top: 32px;
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: ${colors.text700};
  }
  button {
    color: ${colors.primaryDef};
  }
`

export const PolicyAgreement = styled("p")`
  margin-top: 80px;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: ${colors.text700};
  width: 424px;
  text-align: center;
  font-family: "IBM Plex Sans";
  a {
    text-decoration: underline;
  }
`
