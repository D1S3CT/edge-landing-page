type ServiceProp = {
  text: string
  hideBorder?: boolean
}

const ServicesLineComponent: React.FC<ServiceProp> = ({ text, hideBorder }) => {
  return (
    <div className="">
      <div
        className={`flex gap-3 items-center border-b py-[40px] ${
          hideBorder ? 'border-b-0' : 'border-b-[#55565A] '
        }`}
      >
        <img src="/exclude.svg" />
        <p className="text-white text-2xl">{text}</p>
      </div>
    </div>
  )
}

export default ServicesLineComponent
