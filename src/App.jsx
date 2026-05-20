import s from './App.module.css'

import img1 from '/bgnike.webp'
import img2 from '/vapor16none.png'
import img3 from '/tiempo10.png'
import img4 from ''




function App() {

  const navTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <nav>
        <span className="navItems" onClick={() => navTo('s1')}>
          <i className="fa-solid fa-house"></i>
          <a className="navWords">EMPRESA</a>
        </span>

        <span className="navItems" onClick={() => navTo('s2')}>
          <i className="fa-solid fa-futbol"></i>
          <a className="navWords">CHUTEIRAS</a>
        </span>

        <span className="navItems" onClick={() => navTo('s3')}>
          <i className="fa-solid fa-video"></i>
          <a className="navWords">VIDEO</a>
        </span>

        <span className="navItems" onClick={() => navTo('s4')}>
          <i className="fa-brands fa-whatsapp"></i>
          <a className="navWords">CONTATO</a>
        </span>
      </nav>

      <main>

        <section className={s.s1} id="s1">
          <h1>Nike</h1>
          <h2>CHUTEIRAS DE ELITE</h2>
          

        </section>

        <section className={s.s2} id="s2">

          <div className={s.card}>
            <a href="../chuchu/index.html">
              <img
                className="dahora"
                height="100%"
                src={img2}
                alt="Nike Mercurial Vapor 16"
              />

              <div>
                <h4>Nike Mercurial Vapor 16</h4>

                <p>
                  Feita para jogadores rápidos, essa chuteira oferece ajuste firme e sensação leve durante as arrancadas.
                  O solado ajuda na explosão e nas mudanças rápidas de direção.
                </p>
              </div>
            </a>
          </div>

          <div className={s.card}>
            <a href="../chuchu2/index.html">
              <img
                className="dahora"
                height="300px"
                src={img2}
                alt="Nike Phantom GX 2"
              />

              <div>
                <h4>Nike Phantom GX 2</h4>

                <p>
                  Ideal para quem gosta de controle de bola e precisão nos passes e chutes.
                  A textura na parte superior melhora o contato com a bola em jogadas técnicas.
                </p>
              </div>
            </a>
          </div>

          <div className={s.card}>



            <div>
              <h4>Nike Tiempo Legend 10</h4>
              <img
              className="dahora"
              height="300px"
              src={img3}
              alt="Nike Tiempo Legend 10"
              />
              <p>
                Modelo clássico com foco em conforto e toque macio na bola.
                Combina material resistente com encaixe confortável para partidas intensas.
              </p>
            </div>
          </div>

        </section>

        <section className={s.s3} id="s3">

          <iframe
            className="vid"
            src="https://www.youtube.com/embed/JDOQYUYXSk4?autoplay=0"
            title="Neymar Jr."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

        </section>

        <section className={s.s4} id="s4">
          <button className="botao">Entre em contato!</button>
        </section>

      </main>

      <footer>

        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img width="40px" src="/assets/icons/instagram.png" alt="Instagram" />
        </a>

        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img width="40px" src="/assets/icons/facebook.png" alt="Facebook" />
        </a>

        <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
          <img width="40px" src="/assets/icons/tiktok-icon-free-png.webp" alt="TikTok" />
        </a>

      </footer>
    </>
  )
}

export default App