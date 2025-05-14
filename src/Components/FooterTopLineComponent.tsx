import React from "react";
import {FaFacebookF, FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {BsTiktok} from "react-icons/bs";
import {CiLinkedin} from "react-icons/ci";
import {SlSocialYoutube} from "react-icons/sl";
import ButtonComponent from "./ButtonComponent.tsx";

const FooterTopLineComponent: React.FC = () => {
    return (
        <div className="flex items-center justify-between items-center">
            <h2 className="text-4xl text-white">EDGE</h2>
            <ul className="flex gap-[20px] items-center">
                <li>
                    <FaInstagram className="text-[#D5C9BE] size-[26px]"/>
                </li>
                <li>
                    <BsTiktok className="text-[#D5C9BE] size-[22px]"/>
                </li>
                <li>
                    <CiLinkedin className="text-[#D5C9BE] size-[28px]"/>
                </li>
                <li>
                    <FaFacebookF className="text-[#D5C9BE] size-[22px]"/>
                </li>
                <li>
                    <FaTelegramPlane className="text-[#D5C9BE] size-[26px]"/>
                </li>
                <li>
                    <SlSocialYoutube className="text-[#D5C9BE] size-[26px]"/>
                </li>
            </ul>
            <ButtonComponent type="Footer"/>
        </div>
    )
}

export default FooterTopLineComponent
