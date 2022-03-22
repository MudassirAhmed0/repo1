import styles from '../../styles/Chalja.module.css';

const CardHeader = ({children,pricingHeader}) => {
  return (
    <div className={`flex flex-col md:flex-row md:flex-center md:items-center md:justify-between ${pricingHeader && styles.pricingHeader} ${styles.shipmentHeader}`}>
      {children}
    </div>
  )
}

export default CardHeader