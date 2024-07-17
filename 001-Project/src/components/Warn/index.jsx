import './index.css'

function Warn() {

    window.addEventListener("scroll", () => {

        const warn = document.getElementById("warn");
        warn.classList.toggle("fixed", window.scrollY <= 0);
    })

    return (
        <div id='warn' className="warn--container">
            <p className="warn-freeShipp--container">Those with free shipping have a blue button</p>
            <p className="warn-discount--container">Those who have discounts, their cards are red</p>
        </div>
    )
}

export default Warn