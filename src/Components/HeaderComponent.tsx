import React, { useEffect } from "react";
import { Link, scrollSpy } from "react-scroll";

const HeaderComponent: React.FC = () => {
    useEffect(() => {
        scrollSpy.update();
    }, []);

    return (
        <div className="flex justify-around sticky top-0 z-50 bg-[#222] shadow-md py-6">
            <div>
                <h2 className="text-4xl text-white">EDGE</h2>
            </div>
            <div>
                <ul className="flex gap-[29px] text-base italic cursor-pointer text-white">
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
        </div>
    );
};

export default HeaderComponent;
