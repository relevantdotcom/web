import { create } from "zustand"
import { useModalType } from "./Modal.type"

export const useModal = create<useModalType>((set) => ({
  open: false,
  setOpen: () => set((state: any) => ({ open: !state.open })),
}))
