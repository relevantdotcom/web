import { HomepageSection } from "../HomepageSection/HomepageSection"
import { FooterDescription, ListWrapper } from "./Footer.style"

export function Footer() {
  return (
    <HomepageSection>
      <img src="/assets/footer.svg" />
      <FooterDescription>
        <div>Copyright © 2023 Relevant. All right reserved.</div>
        <ListWrapper>
          <ul>
            <li>About Us</li>
            <li>Home</li>
            <li>Add Business</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </ListWrapper>
      </FooterDescription>
    </HomepageSection>
  )
}
