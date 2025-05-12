import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderComponent from './Components/HeaderComponent'
import TitleComponent from './Components/TitleComponent'
import ButtonComponent from './Components/ButtonComponent'
import Main from '../src/Img/main.png'
import ServicesPanelComponent from './Components/ServicesPanelComponent'

createRoot(document.getElementById('root')!).render(
  <div className="bg-[#282829]">
    <div className="flex justify-between flex-wrap bg-[#222] text-white">
      <div className="w-full md:w-6/12 lg:w-5/12 xl:w-5/12 pt-10 pl-30">
        <HeaderComponent />
        <div className="mt-40">
          <TitleComponent /> <ButtonComponent />
        </div>
      </div>
      <div className="">
        <img className="max-h-[991px]" src={Main} width={763} />
      </div>
    </div>
    <div className="flex justify-between ">
      <ServicesPanelComponent />
    </div>
  </div>
)
