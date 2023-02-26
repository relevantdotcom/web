import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useClickAway } from "react-use"
import { FullScreenContainer } from "../FullScreenContainer"
import { Icon } from "../Icon/Icon"

export function Modal({ isModal, setModal, children }: any) {
  const ref = useRef(null)
  useClickAway(ref, () => setModal(false))
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
    return () => {
      setIsBrowser(false)
    }
  }, [])

  const modal = (
    <AnimatePresence>
      {isModal && (
        <FullScreenContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            ref={ref}
            style={{
              position: "fixed",
              background: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              borderRadius: "5px",
            }}
          >
            {/* <button
              style={{
                position: "absolute",
                top: 22,
                right: 22,
                outline: "none",
                background: "none",
                border: "none",
              }}
              onClick={() => setModal(false)}
            >
              <Icon
                type="cross"
                style={{
                  height: "20px",
                  width: "20px",
                  cursor: "pointer",
                }}
              />
            </button> */}
            {children}
          </motion.div>
        </FullScreenContainer>
      )}
    </AnimatePresence>
  )

  if (isBrowser) {
    //@ts-ignore
    return createPortal(modal, document.querySelector("#modal-root"))
  } else {
    return null
  }
}
