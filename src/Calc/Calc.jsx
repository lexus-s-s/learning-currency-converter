import { useState } from "react"

function Calc(props) {
    const [result, setResult] = useState(null)
    const [base, setBase] = useState("")

    const FormRes = (e) => {
        e.preventDefault()

        const elements = e.target.elements
        const amount = Number(elements.amount.value)
        const cur = elements.currency.value

        let selected = props.rate.find((item) => item.quote === cur)

        if (!selected) return

        let res = amount / selected.rate

        setResult(res)
        setBase(selected.base)
    }

    return (
        <section className="calculator-section">
            <h2>Калькулятор обмена</h2>

            <div className="calculator">
                <p className="muted">Я хочу</p>

                <form onSubmit={FormRes}>
                    <input type="number" name="amount" />

                    <select aria-label="Валюта" name="currency">
                        {props.rate.map((item) => (
                            <option key={item.quote} value={item.quote}>
                                {item.quote}
                            </option>
                        ))}
                    </select>

                    <button>Submit</button>
                </form>
            </div>

            <p className="muted result-title">Результат</p>

            <div className="results">
                {result !== null ? `${base}: ${result.toFixed(2)}` : "0.00"}
            </div>
        </section>
    )
}

export default Calc