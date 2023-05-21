/* eslint-disable react/prop-types */
import income from '../assets/income-icon.png'
 import expense from '../assets/expense-icon.png'

const Card = ({type='credit',amount=0}) => {
    return (
        <div className={type=== 'credit'? 'card': 'card card--debit'}>
            <img src={type=== 'credit'? income: expense} alt="" className='card__img' />
            <div className="card__content">
                <p className="card__title">{type==='credit'? 'Income': 'Expense'}</p>
                <p className="card__balance">{amount}</p>
            </div>
        </div>
    )
}

export default Card