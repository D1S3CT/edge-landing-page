type ServiceProp = {
  text: string
}

const ServicesLineComponent: React.FC<ServiceProp> = ({ text }) => {
  return (
    <div className="">
      <div className="flex gap-3 items-center">
        <img src="/exclude.svg" />
        <p className="text-white text-2xl">{text}</p>
      </div>
      <hr className="w-[100%] " />
    </div>
  )
}

export default ServicesLineComponent
