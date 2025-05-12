type Style = {
  bg: 'black' | 'white'
  color: 'black' | 'white'
  size: string
  py: number
  px: number
  weight: boolean
}

const ButtonComponent: React.FC<Style> = ({
  bg,
  color,
  size,
  px,
  py,
  weight,
}) => {
  return (
    <div>
      <button
        className={`p-2 bg-${bg} text-${color} text-${size} px-[${px}px] py-[${py}px] font-${
          weight ? 'bold' : 'medium'
        } mt-10 cursor-pointer rounded-[4px] w-[170px] h-[70px] max-w-[192px] max-h-[96px]`}
      >
        ORDER
      </button>
    </div>
  )
}

export default ButtonComponent
