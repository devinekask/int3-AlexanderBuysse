<main class="container container-home">
    <nav class="home-navi">
      <a href="index.php?page=index" class="button">Home</a>
    </nav>
    <article class="header header-home">
        <h1 class="display-none"></h1>
        <div class="shop-wrap">
          <section class="shop-section margin-zero">
            <div class="shop-section__grap">
              <h2 class="section-title shop-section__title">Grondstof Kit</h2>
              <img class="shop-section__image" src="./assets/img/grondstofKit.png" alt="grondstof kit" width="295">
            </div>
            <div class="shop-section__text">
              <ul class="shop-list">
                <li>Ducktape</li>
                <li>Hout</li>
                <li>Plastic zeil</li>
                <li>Spijkers</li>
              </ul>
              <a class="shop-button shop-button__four" href="">In winkelkar</a>
              <p class="shop-section__price">€20</p>
            </div>
          </section>
          <section  class="shop-section">
            <div class="shop-section__grap">
              <h2 class="section-title shop-section__title">Gereedschap Kit</h2>
              <img class="shop-section__image" src="./assets/img/toolKit.png" alt="tool kit" width="330">
            </div>
            <div class="shop-section__text">
              <ul class="shop-list">
                <li>Bladblazer</li>
                <li>Schroevendraaier</li>
                <li>Zaag</li>
              </ul>
              <a class="shop-button" href="">In winkelkar</a>
              <p class="shop-section__price">€80</p>
            </div>
          </section>
          <section class="shop-section">
            <div class="shop-section__grap">
              <h2 class="section-title shop-section__title">Veiligheids Kit</h2>
              <img class="shop-section__image" src="./assets/img/veiligKit.png" alt="veiligheids kit" width="310">
            </div>
            <div class="shop-section__text">
              <ul class="shop-list">
                <li>Veiligheid glazen</li>
                <li>Stevige werkschoenen</li>
                <li>EHBO-kit</li>
              </ul>
              <a class="shop-button" href="">In winkelkar</a>
              <p class="shop-section__price">€30</p>
            </div>
          </section>
        </div>
    </article>

    <div class="shop-basket__grid">
      <article class="shop-basket">
        <h2 class="display-none">Winkelkar</h2>
        <ul class="shop-basket__items">
          <li class="shop-basket__item"><a href="" class="remove"><span>x</span></a> <p>Grondstof kit</p><img src="./assets/img/grondstof.png" alt="schild" width="50"></li>
          <li class="shop-basket__item"><a href="" class="remove"><span>x</span></a><p>Gereedschap kit</p><img src="./assets/img/hamer.png" alt="hamer" width="40"></li>
          <li class="shop-basket__item"><a href="" class="remove"><span>x</span></a><p>Veiligheids kit</p><img src="./assets/img/schild.png" alt="schild" width="80"></li>
        </ul>
        <img class="shop-basket__image" src="./assets/img/winkelkar.png" alt="winkelkar" width="300">
      </article>
      <article class="shop-checkout">
        <div class="shop-maxwidth">
          <h2 class="section-title white-color step__title shop-checkout__title">Bestellen</h2>
          <p class="step-one__text text-center"> <em>Goed zo!</em> Als je iets bestelt weet je duidelijk van aanpakken. Enkel focussen op de hoofdzaak is heel belangrijk. Vul hieronder je gegevens in en we bezorgen je zo snel mogelijk je pakketje.</p>
          <form action="post" class="shop-form">
            <div class="labels-name">
              <div>
                <label class="label">
                  <input class="label-input" type="text" name="name" placeholder=" " maxlength="35">
                  <p class="label-text">Voornaam</p>
                  <span class="label-counter"></span>
                </label>
              </div>

              <label class="label">
                <input class="label-input" type="text" name="sirname" placeholder=" " maxlength="35">
                <p class="label-text">Naam</p>
                <span class="label-counter"></span>
              </label>
            </div>

            <div class="label-adresses">
              <p class="label-adres__info"> <img src="./assets/img/info-button.png" alt="info button" width="20"> straatnaam, huisnummer, postcode en stad</p>
              <label class="label label-adres">
                <input class="label-input label-adres" name="adres" type="text" placeholder=" " maxlength="99">
                <p class="label-text">Adres</p>
                <span class="label-counter"></span>
              </label>
            </div>
            <div class="shop-confirm">
              <p class="shop-confirm__price"> Prijs: <span class="shop-confirm__price-bold">€0</span></p>
              <input type="submit" class="shop-confirm__submit button" value="Bestel">
            </div>
          </form>
        </div>
      </article>
    </div>
</main>
