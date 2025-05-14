import Girl from "../Img/Girl.png"
import bg from "../Img/bg.png"

const ContactsComponent: React.FC = () => {
  return (
        <div className="relative overflow-hidden">
            <div className="flex bg-white flex flex-col my-0 mx-auto max-w-[85%] mt-[100px] rounded-[30px] py-[43px] pl-[7%]">
                <h1 className="text-[#38535D] text-[54px] max-w-[774px]">Fill out the form to get a consultation or place an order</h1>
                <form className="flex flex-col gap-[26px]">
                    <div className="flex flex-col gap-[13px]">
                        <input type="text" placeholder="Name" className="border border-[#D6D6D6] max-w-[781px] py-[14px] pl-[40px] text-2xl text-[#55565A] rounded-[4px]"/>
                        <input type="email" placeholder="Email" className=" border border-[#D6D6D6] max-w-[781px] py-[14px] pl-[40px] text-2xl text-[#55565A] rounded-[4px"/>
                    </div>
                    <label className="flex gap-[10px] items-center"><input type="checkbox" className="w-[18px] h-[18px]"/> <p className="text-[1.19rem]">I accept Privacy policy</p> </label>
                    <button type="submit" className="max-w-[781px] py-[32px] text-2xl text-white bg-[#282829] rounded-[4px]">SUBMIT FORM</button>
                </form>
            </div>
            <img src={bg} width={1200} className="absolute top-24.5 right-35"/>
            <img src={Girl} width={600} className="absolute bottom-[-130px] right-60"/>
        </div>
  )
}

export default ContactsComponent
