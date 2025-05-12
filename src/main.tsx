import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderComponent from './Components/HeaderComponent'
import ImgComponent from './Components/ImgComponent'
import TitleComponent from './Components/TitleComponent'
import ButtonComponent from './Components/ButtonComponent'

createRoot(document.getElementById('root')!).render(
  <div className="">
    <div className="flex justify-between flex-wrap bg-[#222] text-white">
      <div className="w-full md:w-6/12 lg:w-5/12 xl:w-5/12 pt-10 pl-30">
        <HeaderComponent />
        <div className="mt-40">
          <TitleComponent />{' '}
          <ButtonComponent
            bg="white"
            color="black"
            size="2xl"
            px={40}
            py={20}
            weight={true}
          />
        </div>
      </div>
      <div className="">
        <ImgComponent />
      </div>
    </div>
  </div>
)
