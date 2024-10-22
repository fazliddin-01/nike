import React, { useState } from 'react'
import './assets/sass/main.scss';
import logo from "./assets/img/logo.png";
import img_1 from "./assets/img/img-1.png";
import img_2 from "./assets/img/img-2.png";
import img_3 from "./assets/img/img-3.png";
import img_4 from "./assets/img/img-4.png";
import img_right from "./assets/img/nike.png";
import face from "./assets/img/facebook.png";
import hero from "./assets/img/logo.jpg";
import close from "./assets/img/close.png";

const App = () => {
  const [active,setActive] = useState(false)
  return (
    <>

    <div>
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav__wrapper">
              <div className="logo">
              <img src={logo} className="nav__logo" alt="logo" />
              </div>
              <button className="nav_menu" onClick={()=>setActive(true)}>
                        <img src={hero} alt="" />
                    </button>
              <ul className={`nav_list ${active && "active"}`}>
              <button className="nav_close" onClick={()=>setActive(false)}>
                <img src={close} alt="" />
              </button>
                <li className="nav__item">
                  <a href="#" className="nav__link">Кроссовки</a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">Кеды</a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">Футболки</a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">Шорты</a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">Майки</a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">Олимпийки</a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">Толстовки</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <h2 className="hero__title">NIKE</h2>
              <p className="hero__text">
                Крутые кроссовки от <span className="hero__text-bold">NIKE</span> для вас.
              </p>
            </div>
            </div>
        </section>
      </header>

      <main className="main">
        <section className="product">
          <div className="container">
            <div className="product__wrapper">
              <div className="product__right">
                <img src={img_right} alt="" className="product__right-img" />
                <h2 className="product__right-title">Shoe Review: Nike React Infinity Run</h2>
                <p className="product__right-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa
                </p>
              </div>
              <div className="product__left">
                <ul className="product__list">
                  <li className="product__item">
                    <a href="">
                      <div className="product__item-inner-wrapper">
                        <img src={img_1} alt="nike product trainer" className="product__left-img" />
                        <h2 className="product__left-title">Nike Air Max 270</h2>
                        <p className="product__left-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="product__item">
                    <a href="">
                      <div className="product__item-inner-wrapper">
                        <img src={img_2} alt="nike product trainer" className="product__left-img" />
                        <h2 className="product__left-title">Nike Tanjun</h2>
                        <p className="product__left-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="product__item">
                    <a href="">
                      <div className="product__item-inner-wrapper">
                        <img src={img_3} alt="nike product trainer" className="product__left-img" />
                        <h2 className="product__left-title">Зеленый Air</h2>
                        <p className="product__left-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="product__item">
                    <a href="">
                      <div className="product__item-inner-wrapper">
                        <img src={img_4} alt="nike product trainer" className="product__left-img" />
                        <h2 className="product__left-title">Nike moon shoes</h2>
                        <p className="product__left-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__right">
              <input type="text" className="footer_input-name" placeholder="Введите свое имя" />
              <input type="text" className="footer_input-comment" placeholder="Сообщение" />
              <button className="footer__btn">Отправить</button>
            </div>
            <div className="footer__left">
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#!" className="footer__list-link">Кроссовки</a>
                </li>
                <li className="footer__list-item">
                  <a href="#!" className="footer__list-link">Кеды</a>
                </li>
                <li className="footer__list-item">
                  <a href="#!" className="footer__list-link">Футболки</a>
                </li>
                <li className="footer__list-item">
                  <a href="#!" className="footer__list-link">Шорты</a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#!" className="footer__list-link">Майки</a>
                </li>
                <li className="footer__list-item">
                  <a href="#!" className="footer__list-link">Олимпийки</a>
                </li>
                <li className="footer__list-item">
                  <a href="#!" className="footer__list-link">Толстовки</a>
                </li>
              </ul>
            </div>

            <div className="footer_end">
              <img src={face} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>

 
    </>
  )
}

export default App
