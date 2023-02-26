// @ts-nocheck
// import "react-quill/dist/quill.snow.css"
// import "react-quill/dist/quill.bubble.css"
// import { TextEditorInput } from "./TextEditor.style"
// import { debounce } from "@mui/material"
// import { FormFieldLabel } from "../FormField.style"
// import { TextFieldDiv } from "./TextField.style"

// type TextFieldProps = {
//   name?: string
//   label?: string
//   placeholder?: string
//   error?: string
//   prefix?: string | number | JSX.Element
//   suffix?: string | number | JSX.Element
//   icon?: JSX.Element
//   defaultValue?: any
//   type?: string
//   incrementIcon?: any
//   decrementIcon?: any
//   value?: string | number
//   min?: string | number
//   hideNumberChange?: boolean
//   onChange?: (e: any) => void
// }

export function TextEditorField({
  onChange,
  name,
  defaultValue,
  placeholder,
  error,
  label,
}: TextFieldProps) {
  // const modules = {
  //   toolbar: [
  //     [{ header: [1, 2, false] }],
  //     ["bold", "italic", "underline", "strike", "blockquote"],
  //     [
  //       { list: "ordered" },
  //       { list: "bullet" },
  //       { indent: "-1" },
  //       { indent: "+1" },
  //     ],
  //     ["link", "image"],
  //     ["clean"],
  //   ],
  // }

  // const formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  //   "color",
  // ]

  // function labelText() {
  //   const text = label || friendlyName()
  //   if (error) {
  //     return `${text} ${error}.`
  //   }
  //   // modifications
  //   return text
  // }

  // function friendlyName() {
  //   if (name) {
  //     return name
  //       .trim()
  //       .replace("_id", "")
  //       .replace(/[\W_]+/g, " ")
  //       .split(" ")
  //       .map(
  //         (element) =>
  //           element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
  //       )
  //       .join(" ")
  //   }
  //   return ""
  // }

  // const debouncedOnChange = debounce(onChange, 200)

  return (
    <>
      <h1>Text editor</h1>
      {/* <FormFieldLabel error={error}>{labelText()}</FormFieldLabel>
      <TextFieldDiv>
        <TextEditorInput
          name={name}
          modules={modules}
          formats={formats}
          placeholder={placeholder || friendlyName()}
          theme="snow"
          onChange={debouncedOnChange}
          defaultValue={defaultValue}
        />
      </TextFieldDiv> */}
    </>
  )
}
