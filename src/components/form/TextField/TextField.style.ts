import { colors, componentsConfig } from "@/src/config"
import styled from "@emotion/styled"
import { FormikErrors } from "formik"

const { light } = componentsConfig.input

type FormFieldLabelType = {
  error?: string | FormikErrors<any> | string[] | FormikErrors<any>[] | boolean
  theme: string
}

export const TextFieldDiv = styled("div")`
  display: flex;
  position: relative;
`
export const TextFieldPrefix = styled("div")<{ theme: "light" | "dark" }>`
  position: absolute;
  left: 12px;
  top: 28%;
  font-size: 15px;
`

type TextFieldIconPropsType = {
  suffix?: boolean
  type?: boolean
  hideNumberChange?: boolean
  password?: boolean
}

export const TextFieldSuffix = styled("div")<TextFieldIconPropsType>`
  position: absolute;
  right: ${({ password }) => (password ? "15px" : "15px")};
  top: 0;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`

type TextFieldPropsType = {
  prefix?: string | number | JSX.Element
  suffix?: string | number | JSX.Element
  icon?: boolean
  theme: string
  errorPresent?: boolean
}

export const TextFieldInput = styled("input")<TextFieldPropsType>`
  display: flex;
  width: 100%;
  gap: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme === "light" ? "transparent" : colors.primary200};

  padding: ${({ prefix, suffix, icon }) =>
    prefix && suffix && icon
      ? "8px 50px 8px 38px"
      : suffix && icon
      ? "8px 50px 8px 10px"
      : prefix
      ? "8px 38px"
      : suffix || icon
      ? "8px 32px 8px 10px"
      : "8px 10px"};

  transition: all 0.3s ease;

  &:active:not(:disabled),
  :focus:not(:disabled) {
    background: rgba(196, 196, 196, 0.12);
    //box-shadow: inset 0px 30px 30px rgba(0, 0, 0, 0.1);
    outline: none;
    box-shadow: ${light.shadow};
  }

  &:disabled {
    background: rgba(150, 150, 150, 0.1);
  }

  border: 1px solid
    ${({ errorPresent, theme }) =>
      errorPresent
        ? colors.red
        : theme === "light"
        ? colors.grey60
        : colors.primary200};

  margin: 8px 0px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "" : colors.primary800)};
`

export const TextFieldIcon = styled("div")<TextFieldIconPropsType>`
  position: absolute;
  right: ${({ suffix, type, hideNumberChange }) =>
    suffix && type && !hideNumberChange ? "58px" : suffix ? "38px" : "12px"};
  top: 50%;
  width: 15px;
  height: 25px;
`

export const IncrementBtn = styled("button")<{ theme: string }>`
  position: absolute;
  top: 9px;
  right: 1px;
  height: 19px;
  border-radius: 0px 10px 0px 0px;
  border: 0.1px solid
    ${(props) =>
      props.theme === "dark" ? colors.primary200 : colors.primary200};
  color: ${({ theme }) => (theme === "light" ? "#b8b8b8" : "#676767")};

  background: ${({ theme }) =>
    theme === "dark"
      ? "rgba(196, 196, 196, 0.1)"
      : "rgba(196, 196, 196, 0.15)"};
`
export const DecrementBtn = styled("button")<{ theme: string }>`
  position: absolute;
  top: 26px;
  right: 1px;
  height: 19px;
  border-radius: 0px 0px 10px 0px;
  border: 0.1px solid
    ${(props) =>
      props.theme === "dark" ? colors.primary200 : colors.primary200};
  color: ${({ theme }) => (theme === "light" ? "#b8b8b8" : "#676767")};

  background: ${({ theme }) =>
    theme === "dark"
      ? "rgba(196, 196, 196, 0.1)"
      : "rgba(196, 196, 196, 0.15)"};
`

export const TextArea = styled("textarea")<TextFieldPropsType>`
  padding: 10px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === "light" ? "transparent" : colors.primary200};

  padding: ${({ prefix, suffix, icon }) =>
    prefix && suffix && icon
      ? "8px 50px 8px 38px"
      : suffix && icon
      ? "8px 50px 8px 10px"
      : prefix
      ? "8px 38px"
      : suffix || icon
      ? "8px 32px 8px 10px"
      : "8px 10px"};

  transition: all 0.3s ease;

  &:active:not(:disabled),
  :focus:not(:disabled) {
    background: rgba(196, 196, 196, 0.12);
    //box-shadow: inset 0px 30px 30px rgba(0, 0, 0, 0.1);
    outline: none;
    box-shadow: ${light.shadow};
  }

  &:disabled {
    background: rgba(150, 150, 150, 0.1);
  }

  border: 1px solid
    ${({ errorPresent, theme }) =>
      errorPresent
        ? colors.red
        : theme === "light"
        ? colors.primary200
        : colors.primary200};

  margin: 8px 0px;
  color: ${({ theme }) => (theme === "light" ? "" : colors.primary800)};

  font-family: "Poppins";
  font-size: 13px;

  -webkit-font-smoothing: antialiased;
  ::-webkit-resizer {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
export const FormFieldLabel = styled("label")<FormFieldLabelType>`
  font-weight: bold;
  color: ${({ error, theme }) =>
    error
      ? colors.red
      : theme === "light"
      ? colors.primary800
      : colors.primary800};
  font-size: 14px;
`
export const FormField = styled("div")`
  padding: 3px;
  position: relative;
`
