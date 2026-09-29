const posts = [
  {
    title: "Tokyo Game Show 2026 Resmi Dimulai, Ini Game yang Paling Menarik",
    category: "GAME",
    date: "17 September 2026",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEj5GflBvlUgnd_2c52DutD0dLq__f4_mROCjxX35Kr4_b_JrNWjGj8PMpXVauD-bTOKMu-W46sLXJPGX_b-l7a5e77uMyN0gqYP6v_QHjjkBLLJugRGy65SMdoYYFhEF5_y8xLL_EeG62gAU-DriyvjJ-_CKh8hZyzf6XtE2yFJTtSa9TO7uqkX9fJmW3Cc=w640-h360",
    url: "https://ubxthingsstd.blogspot.com/2026/09/tokyo-game-show-2026-resmi-dimulai-ini.html",
  },
  {
    title: "NVIDIA DLSS 5: Cara Kerja, Performa, dan Kenapa AI Kini Mengubah Grafik Game",
    category: "TECH NEWS",
    date: "2 September 2026",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjfDjbafscom6I-KYoxykpAEwDr0V8X58WyCyISuXKLydyF3MRagEDaMht3rR3fdMVlSBPJXXT2xzuy-vFImfkVoCKfoK7wUIxOmFyOlbOyBjQUwXilTP84NiZ_7J_hBz-ZFPkQKg041LkSTgz6UO00AKoGF_CswPDjtytAEX41SFl684rZ9KYrXahk9UFT=w640-h360",
    url: "https://ubxthingsstd.blogspot.com/2026/09/nvidia-dlss-5-cara-kerja-performa-dan.html",
  },
  {
    title: "GTA VI Semakin Dekat: Rockstar Akhirnya Membuka Lebih Banyak Rahasia Vice City",
    category: "GAME",
    date: "1 September 2026",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEi1r7Pvlkta6mR1yi6lUyH0X78ZbAUxOnrSgoCQNLmZXnK4FTfjCHuNDkY1Gbq3Hmafy6CUhzfnftpexMqRJo2lIf2m3b8YVv6w9ahJJprtmxY3txcMfZEJI8KKFsQLtklENLjmigpZBG9adN35EPhiscbGM20TcQgeVP4pcPesdTMOytOMiO0evBg8Opmi=w640-h360",
    url: "https://ubxthingsstd.blogspot.com/2026/09/gta-vi-semakin-dekat-rockstar-akhirnya.html",
  },
  {
    title: "HP Flagship Makin Mahal, Tapi Kenapa Terasa Biasa Aja?",
    category: "TECH NEWS",
    date: "25 Februari 2026",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjcFk3d8Nc-Ft9NiYZTLODUSH24F5N_q47NMCLs02Hzm_BYtniW-9AVfAZKCf4FvK6yh_MI1N1i9Rhq-JcvEVQKKxdExtDG7npuFphj8ZhkaEaiRRDLkOl_xUt6JoNmgTnZB78vSM7FQtfFC8UCIS-rwl_bTNHR7izlVLwj1aaG0AZcotOjE7EjCW8c1j4=w640-h360",
    url: "https://ubxthingsstd.blogspot.com/2026/02/hp-flagship-makin-mahal-tapi-kenapa.html",
  },
  {
    title: "Apple 2026: iPhone Murah, MacBook Super Cepat & Fitur Rahasia yang Bikin Heboh",
    category: "TECH NEWS",
    date: "21 Februari 2026",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEj-vBRLmbd8IeWYjSHsCYW9XUt-H04IKc5Tkj5oeb6zbFxaBUVdFEIoKpCWiXsUjrAXFrkvPpf3NPjMsYJZt7eosiD-1j_v6YkHfrsAfp7fVBK5UEI1kbYhwvYX124gRC86CXxCrae9g-ZJjwWgcmYgk_6yBFgDJB_6UYUY4nh8KrKDJxvYKsIXhxSSMg8X=w640-h360",
    url: "https://ubxthingsstd.blogspot.com/2026/02/apple-2026-iphone-murah-macbook-super_21.html",
  },
  {
    title: "Bayangan Sang Raja: AMD di Dekade 1970-an",
    category: "BIOGRAPHY",
    date: "5 September 2025",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEguIQee9CWkW2M-dmpmGGF8mbT6gJySQky41KxiQbWAdSLmLdzGZ3iIIHNYiD7VdmObN3KIZiCcDZnrM5GRh6N4tw58YXD1B-d0KD-wr75SNgV0ORYLkeMVJ3cv53tbU5rIrMRSWfB4dI2gmWDFix0Rb-gXFniubafFvwLGZ-obbAFgTK7UYAlUVTLT9LcJ=w640-h360",
    url: "https://ubxthingsstd.blogspot.com/2025/09/bayangan-sang-raja-amd-di-dekade-1970-an.html",
  },
];

export default function Home() {
  return (
    <main>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f7f8fc;
          color: #171923;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
        }

        .nav {
          width: min(1380px, calc(100% - 32px));
          margin: 18px auto 0;
          min-height: 72px;
          padding: 0 25px;
          display: flex;
          align-items: center;
          gap: 30px;
          border-radius: 20px;
          background: linear-gradient(100deg, #4268df, #35c9d6);
          box-shadow: 0 16px 45px rgba(53, 108, 220, .22);
          color: white;
          position: relative;
          z-index: 10;
        }

        .logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
          white-space: nowrap;
        }

        .menu {
          margin-left: auto;
          display: flex;
          gap: 30px;
          font-size: 13px;
          font-weight: 800;
        }

        .menu a:hover {
          opacity: .7;
        }

        .search {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.5);
          display: grid;
          place-items: center;
          font-size: 20px;
        }

        .container {
          width: min(1380px, calc(100% - 32px));
          margin: 28px auto 0;
        }

        .hero {
          position: relative;
          min-height: 500px;
          border-radius: 34px;
          overflow: hidden;
          background:
            radial-gradient(circle at 80% 40%, rgba(75, 70, 255, .28), transparent 28%),
            radial-gradient(circle at 90% 90%, rgba(20, 211, 221, .3), transparent 30%),
            linear-gradient(135deg, #ffffff 0%, #eef2ff 100%);
          padding: 55px;
          display: flex;
          align-items: center;
          box-shadow: 0 25px 70px rgba(27, 39, 72, .1);
        }

        .hero:before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -120px;
          top: -120px;
          border: 2px solid rgba(75, 91, 240, .15);
          border-radius: 50%;
          box-shadow:
            0 0 0 35px rgba(75,91,240,.04),
            0 0 0 75px rgba(75,91,240,.025);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
        }

        .badge {
          display: inline-block;
          padding: 9px 14px;
          border-radius: 999px;
          background: #171923;
          color: white;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .hero h1 {
          margin: 20px 0 18px;
          font-size: clamp(48px, 6vw, 82px);
          line-height: .9;
          letter-spacing: -5px;
          font-weight: 950;
        }

        .hero h1 span {
          color: #4763ef;
        }

        .hero p {
          max-width: 540px;
          color: #687087;
          font-size: 17px;
          line-height: 1.6;
        }

        .hero-button {
          display: inline-block;
          margin-top: 12px;
          padding: 14px 21px;
          border-radius: 999px;
          background: #171923;
          color: white;
          font-size: 13px;
          font-weight: 800;
        }

        .hero-image {
          position: absolute;
          width: 47%;
          max-width: 610px;
          right: 2%;
          bottom: 0;
          object-fit: contain;
          transform: rotate(-2deg);
          filter: drop-shadow(0 30px 30px rgba(20, 32, 80, .2));
        }

        .layout {
          margin-top: 25px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 310px;
          gap: 25px;
        }

        .section {
          background: white;
          border-radius: 27px;
          padding: 27px;
          box-shadow: 0 15px 45px rgba(27,39,72,.06);
        }

        .section-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-title h2 {
          margin: 0;
          font-size: 24px;
          letter-spacing: -1px;
        }

        .section-title a {
          color: #4268df;
          font-size: 12px;
          font-weight: 800;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .card {
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid #edf0f5;
          background: white;
          transition: .2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(27,39,72,.1);
        }

        .card-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          background: #e9edf5;
        }

        .card-body {
          padding: 17px;
        }

        .tag {
          color: #4268df;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .7px;
        }

        .card h3 {
          margin: 9px 0;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -.5px;
        }

        .date {
          color: #9098aa;
          font-size: 11px;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .side-card {
          background: white;
          border-radius: 25px;
          padding: 24px;
          box-shadow: 0 15px 45px rgba(27,39,72,.06);
        }

        .side-card h3 {
          margin: 0 0 17px;
          font-size: 15px;
          letter-spacing: -.3px;
        }

        .about {
          color: #687087;
          font-size: 13px;
          line-height: 1.65;
        }

        .social {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
        }

        .social a {
          padding: 9px 12px;
          border-radius: 999px;
          background: #f0f3f9;
          font-size: 11px;
          font-weight: 800;
        }

        .popular {
          display: grid;
          gap: 15px;
        }

        .popular-item {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 12px;
          align-items: center;
        }

        .popular-item img {
          width: 55px;
          height: 55px;
          border-radius: 13px;
          object-fit: cover;
        }

        .popular-item h4 {
          margin: 0;
          font-size: 12px;
          line-height: 1.35;
        }

        .categories {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .category {
          padding: 11px 15px;
          border-radius: 999px;
          background: #f0f3f9;
          font-size: 11px;
          font-weight: 800;
        }

        footer {
          width: min(1380px, calc(100% - 32px));
          margin: 35px auto;
          padding: 30px 0;
          color: #8c94a5;
          text-align: center;
          font-size: 12px;
        }

        @media (max-width: 900px) {
          .menu {
            display: none;
          }

          .layout {
            grid-template-columns: 1fr;
          }

          .hero-image {
            opacity: .28;
            width: 70%;
          }
        }

        @media (max-width: 600px) {
          .nav {
            width: calc(100% - 20px);
            min-height: 62px;
            padding: 0 17px;
          }

          .logo {
            font-size: 20px;
          }

          .container {
            width: calc(100% - 20px);
          }

          .hero {
            min-height: 570px;
            padding: 32px 25px;
            border-radius: 25px;
          }

          .hero h1 {
            font-size: 54px;
            letter-spacing: -3px;
          }

          .hero-image {
            width: 100%;
            right: -15%;
            bottom: 0;
          }

          .section {
            padding: 20px;
            border-radius: 22px;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="site">
        <header className="nav">
          <a href="/" className="logo">UBX THINGS STD.</a>

          <nav className="menu">
            <a href="#featured">FEATURED STORY</a>
            <a href="#latest">LATEST NEWS</a>
            <a href="#all">ALL U NEED</a>
          </nav>

          <div className="search">⌕</div>
        </header>

        <div className="container">
          <section className="hero" id="featured">
            <div className="hero-content">
              <span className="badge">FEATURED STORY</span>

              <h1>
                TECH
                <br />
                MOVES
                <br />
                <span>FAST.</span>
              </h1>

              <p>
                Tech, gaming, gadget, AI, dan hardware.
                Cerita teknologi yang dibuat lebih visual,
                lebih tajam, dan lebih dekat dengan kehidupan sehari-hari.
              </p>

              <a className="hero-button" href={posts[0].url}>
                Baca cerita terbaru →
              </a>
            </div>

            <img
              className="hero-image"
              src={posts[0].image}
              alt={posts[0].title}
            />
          </section>

          <div className="layout">
            <div>
              <section className="section" id="latest">
                <div className="section-title">
                  <h2>Latest News</h2>
                  <a href="/">VIEW ALL →</a>
                </div>

                <div className="grid">
                  {posts.slice(0, 4).map((post) => (
                    <a href={post.url} className="card" key={post.url}>
                      <img
                        className="card-image"
                        src={post.image}
                        alt={post.title}
                      />

                      <div className="card-body">
                        <div className="tag">{post.category}</div>
                        <h3>{post.title}</h3>
                        <div className="date">{post.date}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              <section className="section" id="all" style={{ marginTop: 25 }}>
                <div className="section-title">
                  <h2>All U Need</h2>
                </div>

                <div className="categories">
                  <a className="category" href="/search/label/Biography">
                    Biography
                  </a>

                  <a className="category" href="/search/label/Game">
                    Gaming
                  </a>

                  <a className="category" href="/search/label/Tech%20News">
                    Tech News
                  </a>
                </div>
              </section>
            </div>

            <aside className="sidebar">
              <div className="side-card">
                <h3>ABOUT US</h3>

                <p className="about">
                  <strong>UBX THINGS STD.</strong> membahas teknologi,
                  gaming, gadget, AI, dan hardware melalui berita,
                  analisis, dan insight yang relevan dengan cara
                  teknologi benar-benar digunakan.
                </p>
              </div>

              <div className="side-card">
                <h3>FOLLOW US</h3>

                <div className="social">
                  <a href="https://www.youtube.com/@justnaokii">YouTube</a>
                  <a href="https://www.tiktok.com/@ubxthngs">TikTok</a>
                </div>
              </div>

              <div className="side-card">
                <h3>POPULAR POSTS</h3>

                <div className="popular">
                  {posts.slice(0, 4).map((post) => (
                    <a href={post.url} className="popular-item" key={post.url}>
                      <img src={post.image} alt="" />

                      <h4>{post.title}</h4>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <footer>
          © 2026 UBX THINGS STD. · About · Contact · Privacy Policy · Disclaimer
        </footer>
      </div>
    </main>
  );
}
