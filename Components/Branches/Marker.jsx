import Image from 'next/image'
import styles from '../../styles/Branches.module.css'
import location from '../../assets/NewImages/svg/location.svg'

const Marker = () => {
  return (
    <div>
        <span className={styles.marker}>
            <Image src={location} alt="Location" />
        </span>
    </div>
  )
}

export default Marker