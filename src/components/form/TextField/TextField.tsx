// @ts-nocheck
import {
  TextFieldDiv,
  TextFieldInput,
  TextFieldPrefix,
  TextFieldIcon,
  IncrementBtn,
  DecrementBtn,
  FormField,
  FormFieldLabel,
  TextFieldSuffix,
} from "./TextField.style"
import { debounce } from "@mui/material"
import { forwardRef, MutableRefObject, Ref, useState } from "react"
import { useThemeSwitch } from "@/src/state"
import { FormikErrors } from "formik"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"
import React from "react"

type TextFieldProps = {
  name?: string
  label?: string
  noLabel?: boolean
  placeholder?: string
  error?: string | FormikErrors<any> | string[] | FormikErrors<any>[] | boolean
  prefix?: string | number | JSX.Element
  suffix?: string | number | JSX.Element
  icon?: JSX.Element
  defaultValue?: any
  type?: string
  incrementIcon?: any
  decrementIcon?: any
  value?: string | number
  min?: string | number
  hideNumberChange?: boolean
  onChange?: (e: any) => void
  onBlur?: (e: FocusEvent) => void
  disabled?: boolean
  autoComplete?: "on" | "off"
}
export function friendlyName(name?: string) {
  if (name) {
    return name
      .trim()
      .replace("_id", "")
      .replace(/[\W_]+/g, " ")
      .split(" ")
      .map(
        (element) =>
          element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
      )
      .join(" ")
  }
  return ""
}
const TextField = forwardRef<
  Ref<MutableRefObject<HTMLInputElement | undefined>>,
  TextFieldProps
>(
  (
    {
      name,
      label,
      noLabel,
      type,
      placeholder,
      error,
      prefix,
      suffix,
      icon,
      defaultValue,
      onChange,
      onBlur,
      hideNumberChange,
      min,
      value,
      disabled = false,
      autoComplete = "off",
    }: TextFieldProps,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const { theme } = useThemeSwitch()

    function labelText() {
      const text = label || friendlyName(name)
      if (error) {
        return `${text} ${error}.`
      }
      // modifications
      return text
    }

    function increment() {
      const input = document.querySelector(`#input-${name}`)
      // @ts-ignore
      const inputPrototype = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set
      // @ts-ignore
      inputPrototype.call(input, +input.value + 1)
      // @ts-ignore
      input.dispatchEvent(new Event("change", { bubbles: true }))
    }

    function decrement() {
      const input = document.querySelector(`#input-${name}`)
      // @ts-ignore
      const inputPrototype = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set

      // @ts-ignore
      inputPrototype.call(input, +input.value - 1)
      // @ts-ignore
      input.dispatchEvent(new Event("change", { bubbles: true }))
    }

    function toggleShowPassword() {
      setShowPassword((_) => !_)
    }
    // @ts-ignore
    const debouncedOnChange = debounce(onChange, 200)

    return (
      <FormField>
        {!noLabel && (
          <FormFieldLabel error={error} theme={theme}>
            {labelText()}
          </FormFieldLabel>
        )}

        <TextFieldDiv>
          {prefix && <TextFieldPrefix theme={theme}>{prefix}</TextFieldPrefix>}

          <TextFieldInput
            // @ts-ignore
            ref={ref}
            id={`input-${name}`}
            name={name}
            value={value}
            placeholder={placeholder || friendlyName(name)}
            defaultValue={defaultValue}
            onChange={debouncedOnChange}
            // @ts-ignore
            onBlur={onBlur}
            // @ts-ignore
            prefix={prefix}
            min={min || 0}
            type={showPassword ? "text" : type}
            theme={theme}
            disabled={disabled}
            errorPresent={error ? true : false}
            autoComplete={autoComplete}
          />
          {icon && (
            <TextFieldIcon
              suffix={!!suffix}
              type={!!type}
              hideNumberChange={!!hideNumberChange}
            >
              {icon}
            </TextFieldIcon>
          )}

          {suffix && type !== "password" && (
            <TextFieldSuffix
              type={!!type}
              hideNumberChange={!!hideNumberChange}
            >
              {suffix}
            </TextFieldSuffix>
          )}

          {type === "password" && (
            <TextFieldSuffix onClick={toggleShowPassword} password>
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </TextFieldSuffix>
          )}

          {type === `number` && !hideNumberChange && (
            <>
              <IncrementBtn type="button" onClick={increment} theme={theme}>
                <MdKeyboardArrowUp />
              </IncrementBtn>

              <DecrementBtn type="button" onClick={decrement} theme={theme}>
                <MdKeyboardArrowDown />
              </DecrementBtn>
            </>
          )}
        </TextFieldDiv>
      </FormField>
    )
  }
)
TextField.displayName = "TextField"

export default React.memo(TextField)
