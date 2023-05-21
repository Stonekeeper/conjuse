import Card from "../components/Card"
import Header from "../components/Header"

import graph from '../assets/graph.png'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <p className="home__title">Account Balance</p>
            <p className="home__balance">₹9400</p>
            <div className="home__summary">
                <Card type="credit" amount={5000}/>
                <Card type="debit" amount={1000}/>
            </div>
            <div className="home__stats">
                <p className="stats__title">
                    Spend Frequency
                </p>
                <img src={graph} alt="" className="stats__img"/>
            </div>

        </div>
    )
}

export default Home