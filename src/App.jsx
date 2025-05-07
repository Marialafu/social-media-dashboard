import HeaderComponent from "./components/headerComponent/HeaderComponent";


const App = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <section className="general-data-container">
          <div className="card-container">
            <div className="card-header-container">
              <img src="logo" alt="" />
              <span className="userName"></span>
            </div>
            <div className="card-main-container">
              <span className="followers-number">1987</span>
              <span className="followers-word">FOLLOWERS</span>
            </div>
            <div className="footer-container">
              <img src="up" alt="" />
              <span className="up today">12 Today</span>
            </div>
          </div>
        </section>
        <section className="overview-today">
          <h2>Overview - Today</h2>
          <div className="cards-container">
            <div className="header-container">
              <span>Page views</span>
              <img src="logo" alt="" />
            </div>
            <div className="main-container">
              <span className="number-of-views">52</span>
              <div className="up">
                <img src="up" alt="" />
                <div className="%">2%</div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default App;
