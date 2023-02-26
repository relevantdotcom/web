import { create } from "zustand"

type themeSwitchStateType = {
  theme: "light" | "dark"
  toggleTheme: () => any
}

export const useThemeSwitch = create<themeSwitchStateType>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state: themeSwitchStateType) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}))

// import create from "zustand"

// type ToggleThemeType = {
//   theme: "light" | "dark"
//   toggleTheme: (state: any) => void
// }
// export const useThemeSitch = create<ToggleThemeType>((set) => ({
//   theme: "light",
//   toggleTheme: () =>
//     set((state: any) => ({
//       theme: state.theme === "light" ? "dark" : "light",
//     })),
// }))
