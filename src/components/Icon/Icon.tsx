import { AiFillHeart, AiOutlineClose, AiOutlineSearch } from "react-icons/ai"
import { BsCloudMoonFill, BsFillSunFill } from "react-icons/bs"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import { MdLocationPin } from "react-icons/md"
import { FaBoxOpen } from "react-icons/fa"
import { createElement } from "react"

export type IconsProps = {
  type: keyof typeof IconComponentCollection
  style?: {}
  onClick?: () => void
  className?: string
}

export const IconComponentCollection = {
  search: AiOutlineSearch,
  locationMarker: MdLocationPin,
  alert: "/static/images/Icons_Alert.svg",
  cuisine: "/static/images/Cusine.svg",
  mail: "/static/images/Mail.png",
  notification: "/static/images/Restroverse_Notification.png",
  arrowUp: RiArrowUpSLine,
  arrowDown: RiArrowDownSLine,
  plus: "/static/images/Add.png",
  right: "/static/images/Chevron_Right_1.svg",
  left: "/static/images/Chevron_Left_1.svg",
  love: AiFillHeart,
  moon: BsCloudMoonFill,
  sun: BsFillSunFill,
  burgerMenu: RxHamburgerMenu,
  close: AiOutlineClose,
  openBox: FaBoxOpen,
  cross: RxCross1,
  google: `/assets/googleIcon.svg`,
  facebook: `/assets/facebook.svg`,
  twitter: `/assets/twitter.svg`,
  email: `/assets/email.svg`,
}

export function Icon({ type, ...rest }: IconsProps): JSX.Element {
  const icon = IconComponentCollection[type]
  if (!icon) throw new Error("Icon not found. Did you register your icons?")
  if (typeof icon === "string") {
    return <img src={icon} {...rest} alt="icon" />
    // return createElement("img", { src: icon })
  }
  return createElement(icon, rest)
}
