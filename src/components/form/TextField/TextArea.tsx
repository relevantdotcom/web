// @ts-nocheck
import {
  TextFieldDiv,
  TextArea,
  TextFieldPrefix,
  TextFieldSuffix,
  TextFieldIcon,
  FormField,
  FormFieldLabel,
} from "./TextField.style"
import { debounce } from "@mui/material"
import { forwardRef } from "react"
import { useThemeSwitch } from "@/src/state"
import React from "react"

type TextFieldProps = {
  name?: string
  label?: string
  placeholder?: string
  error?: string
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
}

const TextAreaField = forwardRef(
  (
    {
      name,
      label,
      placeholder,
      error,
      prefix,
      suffix,
      icon,
      defaultValue,
      onChange,
      ...rest
    }: TextFieldProps,
    ref
  ) => {
    const { theme } = useThemeSwitch()

    function labelText() {
      const text = label || friendlyName()
      if (error) {
        return `${text} ${error}.`
      }
      // modifications
      return text
    }

    function friendlyName() {
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

    // @ts-ignore
    const debouncedOnChange = debounce(onChange, 400)

    return (
      <FormField>
        <FormFieldLabel theme={theme} error={error}>
          {labelText()}
        </FormFieldLabel>

        <TextFieldDiv>
          {prefix && <TextFieldPrefix theme={theme}>{prefix}</TextFieldPrefix>}

          <TextArea
            theme={theme}
            // @ts-ignore
            ref={ref}
            {...rest}
            id={`input-${name}`}
            name={name}
            placeholder={placeholder || friendlyName()}
            defaultValue={defaultValue}
            onChange={debouncedOnChange}
            // @ts-ignore
            prefix={!!prefix}
            // @ts-ignore
            suffix={!!suffix}
            icon={!!icon}
            rows={5}
            errorPresent={error ? true : false}
          />
        </TextFieldDiv>
        {icon && <TextFieldIcon suffix={!!suffix}>{icon}</TextFieldIcon>}
        {suffix && <TextFieldSuffix>{suffix}</TextFieldSuffix>}
      </FormField>
    )
  }
)
TextAreaField.displayName = "TextAreaField"

export default React.memo(TextAreaField)
