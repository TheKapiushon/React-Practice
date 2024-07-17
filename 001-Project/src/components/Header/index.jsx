import './index.css'

function Header() {

    window.addEventListener("scroll", () => {

        const header = document.getElementById("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    return (
        <header className='header--container' id='header'>
            <div className="nav--container">
                <a className='nav--items' href="#">Home</a>
                <a className='nav--items' href="#">Contacts</a>
                <a className='nav--items' href="#">Womens</a>
                <a className='nav--items' href="#">Mens</a>
                <a className='nav--items' href="#">Kids</a>
            </div>
            <div className="logo--container">
                <img className='logo--self' src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" />
            </div>
        </header>
    )

}

export default Header;