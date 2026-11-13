import { useState, useEffect } from 'react'
import './Rate.css'
import Calc from '../Calc/Calc'

function Rate() {
    const quoteCurrency = ['USD', 'PHP', 'UAH']

    const [currency, setCurrency] = useState({
        base: 'EUR',
        quoteCurrency: '',
        rate: '',
        date: ''
    })

    const [rates, setRates] = useState([])

    const getRateCurrency = async () => {
        const response = await fetch(
            `https://api.frankfurter.dev/v2/rates?base=${currency.base}`
        )

        const data = await response.json()

        const filteredRates = data.filter(item =>
            quoteCurrency.includes(item.quote)
        )

        setRates(filteredRates)
    }

    useEffect(() => {
        getRateCurrency()
    }, [currency.base])

    return (
        <section className="rates-section">
            <h1>Курс валют</h1>

            <div className="rate-grid">
                {rates.map((item) => (
                    <article className="rate-card" key={item.quote}>
                        <strong>{item.quote}</strong>

                        <div className="rate-values">
                            <span>{item.rate}*</span>
                            <span>* За 1 {item.base}</span>
                        </div>
                    </article>
                ))}
            </div>

            <Calc rate={rates} />
        </section>
    )
}

export default Rate