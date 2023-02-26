export function resetDefaultValue(inputId: string[]) {
  inputId.map((id) => {
    const input = document.getElementById(id)
    // @ts-ignore
    input.value = ""
  })
}
