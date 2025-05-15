import {Link} from "react-scroll"

type PropButtonType = {
  type: 'Hero' | 'Services' | 'Footer'
}

const ButtonComponent: React.FC<PropButtonType> = ({ type }) => {
  return (
    <div>
     <Link to="Contacts" smooth={true} duration={1000}>
         <button
         className={`${
             type === 'Hero'
                 ? 'p-2 bg-white text-black text-2xl px-[40px] py-[20px] mt-10 cursor-pointer rounded-[4px] w-[190px] h-[80px]'
                 : type === 'Services'
                     ? 'p-2 bg-white text-black text-2xl px-[40px] py-[20px] mt-10 cursor-pointer rounded-[4px] w-[614px] h-[80px]'
                     : 'p-2 bg-white text-xl italic  cursor-pointer rounded-[4px] w-[170px] h-[80px]'
         }  transition-transform duration-300 ease-in-out 
            hover:scale-105 hover:shadow-lg hover:bg-[#D5C9BE] hover:text-white`}
     >
         ORDER
        </button>
     </Link>
    </div>
  )
}

export default ButtonComponent
