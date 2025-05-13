import ServicesLineComponent from './ServicesLineComponent'

const ServicesPanelComponent: React.FC = () => {
  const services = [
    'High-quality office space with modern amenities',
    'Flexible lease terms and customizable options',
    '24/7 security and concierge services',
    'On-site fitness center and rooftop garden',
  ]

  return (
    <div className="flex services-container">
      <img src="" alt="" />
      <div>
        {services.map((text, index) => (
          <ServicesLineComponent
            key={text}
            text={text}
            hideBorder={index === services.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesPanelComponent
