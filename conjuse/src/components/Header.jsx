import icon from '../assets/Avatar.png';
import dropDown from '../assets/arrow-down-2.png'
import notification from '../assets/notifiaction.png'

const Header = () => {
  return (
    <div className="header">    
        <img src={icon} alt="" className='header__img'/>
        <div className="header__dropdown">
            <div className='header__container'>
            <img src={dropDown} alt='' className='header__arrow'/>
            <p className="header__month">October</p>
            </div>
            <img src={notification} alt=''/>
            

        </div>
    </div>
  )
}

export default Header