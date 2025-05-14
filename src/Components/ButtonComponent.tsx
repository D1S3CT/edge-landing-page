type PropButtonType = {
  type: 'Hero' | 'Services' | 'Footer'
}

const ButtonComponent: React.FC<PropButtonType> = ({ type }) => {
  return (
    <div>
      <button
        className={`${
          type === 'Hero'
            ? 'p-2 bg-white text-black text-2xl px-[40px] py-[20px] mt-10 cursor-pointer rounded-[4px] w-[190px] h-[80px]'
            : type === 'Services'
            ? 'p-2 bg-white text-black text-2xl px-[40px] py-[20px] mt-10 cursor-pointer rounded-[4px] w-[614px] h-[80px]'
            : 'p-2 bg-white text-xl italic  cursor-pointer rounded-[4px] w-[170px] h-[80px]'
        }`}
      >
        ORDER
      </button>
    </div>
  )
}

export default ButtonComponent
