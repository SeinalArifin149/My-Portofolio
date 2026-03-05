// import { Navbar, Main } from '../../components'
import { Profile_Contact } from "./profile"
import { Text_Contact } from "./text"
import { Sosmed_Icons } from "./sosmed";

export function Contact() {
  return (
    <div className="grid md:grid-cols-2 justify-center items-center gap-6 max-w-4xl mx-auto" id="contact">
      <Text_Contact />
      <Profile_Contact />
      <Sosmed_Icons/>
    </div>
  );
}