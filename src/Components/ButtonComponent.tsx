const ButtonComponent: React.FC = () => {
  return (
    <div>
      <button
        className={`p-2 bg-white text-black text-2xl px-[${40}px] py-[${20}px] font-bold mt-10 cursor-pointer rounded-[4px] w-[190px] h-[80px] max-w-[192px] max-h-[80px]`}
      >
        ORDER
      </button>
    </div>
  )
}

export default ButtonComponent
