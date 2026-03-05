import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Sosmed_Icons() {
    return (
        <div className="text-white text-2xl">
            <p>
                Follow Me!
            </p>
        <div className="flex items-center text-white text-2xl gap-4">

            <a href="https://github.com/SeinalArifin149">
                <FaGithub size={50}/>
            </a>
            
            <a href="https://github.com/SeinalArifin149">
                <FaLinkedin size={50}/>
            </a>

            <a href="https://github.com/SeinalArifin149">
                <FaFacebook size={50}/>
            </a>

            <a href="https://github.com/SeinalArifin149">
                <FaInstagram size={50}/>
            </a>

            <a href="https://github.com/SeinalArifin149" className="flex items-center gap-2">
                <FaWhatsapp size={50}/>
                <h3>+6287889817650</h3>
            </a>


        </div>
    </div>
    )
}