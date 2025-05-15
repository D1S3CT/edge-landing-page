import {Link} from "react-scroll";
import React from "react";


const FooterTopComponent: React.FC = () => {
    return (
        <div className="border-b-2 border-t-2 border-[#D5C9BE] text-xl mt-[100px]">
            <ul className="flex justify-center gap-[60px] py-[40px] text-white text-xl italic">
                <li>
                    <Link
                        to="Home"
                        className="hover-link"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        activeClass="active"
                    >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        to="Services"
                        className="hover-link"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        activeClass="active"
                    >
                        SERVICES
                    </Link>
                </li>
                <li>
                    <Link
                        to="Contacts"
                        className="hover-link"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        activeClass="active"
                    >
                        CONTACTS
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterTopComponent
