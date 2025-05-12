import ServicesLineComponent from './ServicesLineComponent'

const ServicesPanelComponent: React.FC = () => {
  const obj: string[] = [
    'High-quality office space with modern amenities',
    'Flexible lease terms and customizable options',
    '24/7 security and concierge services',
    'On-site fitness center and rooftop garden',
  ]

  return (
    <div>
      {obj.map((item) => (
        <ServicesLineComponent text={item} />
      ))}
    </div>
  )
}

export default ServicesPanelComponent
