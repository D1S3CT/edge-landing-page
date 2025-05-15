import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderComponent from './Components/HeaderComponent'
import TitleComponent from './Components/TitleComponent'
import ButtonComponent from './Components/ButtonComponent'
import First from '../src/Img/first.jpg'
import Second from '../src/Img/second.jpg'
import Third from '../src/Img/third.jpg'
import ServicesPanelComponent from './Components/ServicesPanelComponent'
import ContactsComponent from './Components/ContactsComponent'
import FooterTopComponent from "./Components/FooterTopComponent.tsx";
import FooterBottomComponent from "./Components/FooterBottomComponent.tsx";

createRoot(document.getElementById('root')!).render(
  <div className="bg-[#282829]">
  <HeaderComponent />
    <section id="Home">
        <div className="flex justify-between flex-wrap bg-[#222] text-white">
            <div className="w-full md:w-6/12 lg:w-5/12 xl:w-5/12 pt-10 pl-30">
                <div className="mt-10">
                    <TitleComponent /> <ButtonComponent type="Hero" />
                </div>
            </div>
            <div className="">
                <img className="max-h-[850px]" src={First} width={763} />
            </div>
        </div>
    </section>
    <section id="Services">
        <div className="flex items-end justify-between mt-25">
            <img className="max-h-[724px]" src={Second} width={622} />
            <div className="">
                <ServicesPanelComponent />
                <ButtonComponent type="Services" />
            </div>
            <img className="max-h-[724px]" src={Third} width={589} />
        </div>
    </section>
    <section id="Contacts">
        <ContactsComponent/>
    </section>
    <section id="Footer">
          <FooterTopComponent/>
          <FooterBottomComponent/>
    </section>
  </div>

)
