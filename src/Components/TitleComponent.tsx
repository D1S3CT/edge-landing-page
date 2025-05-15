const TitleComponent = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[5rem]">Benefits of Working with Us</h1>
      <h3 className="text-5xl mt-[30px]">Why Choose Us:</h3>
      <ul className="mt-[64px] text-[1.5rem]">
        <li className="flex gap-3 items-center">
          <img src="check.svg" alt="" />
          <span className="span-numbers">$10 000 </span> per month
        </li>
        <li className="flex gap-3 items-center">
          <img src="check.svg" alt="" />
          <span className="span-numbers">30% </span> discount on your first order
        </li>
        <li className="flex gap-3 items-center">
          <img src="check.svg" alt="" />
          <span className="span-numbers">17% </span> quality guarantee
        </li>
      </ul>
    </div>
  )
}

export default TitleComponent
