<main class="container-home">
    <nav class="home-navi">
      <a href="index.php?page=index" class="button">Home</a>
    </nav>
    <article class="header header-section-one header-home">
        <h1 class="display-none">shop</h1>
        <div class="shop-wrap">
          <section class="shop-section margin-zero">
            <div class="shop-section__grap">
              <h2 class="section-title shop-section__title">Grondstof Kit</h2>
              <img class="shop-section__image" src="./assets/img/grondstof-kit.png" alt="grondstof kit" width="295">
            </div>
            <div class="shop-section__text">
              <ul class="shop-list">
                <li>Ducktape</li>
                <li>Hout</li>
                <li>Plastic zeil</li>
                <li>Spijkers</li>
              </ul>
              <a class="shop-button shop-button__four" id="grondstof" href="">In winkelkar</a>
              <p class="shop-section__price">€20</p>
            </div>
          </section>
          <section  class="shop-section">
            <div class="shop-section__grap">
              <h2 class="section-title shop-section__title">Gereedschap Kit</h2>
              <img class="shop-section__image" src="./assets/img/tool-kit.png" alt="tool kit" width="330">
            </div>
            <div class="shop-section__text">
              <ul class="shop-list">
                <li>Bladblazer</li>
                <li>Schroevendraaier</li>
                <li>Zaag</li>
              </ul>
              <a class="shop-button" href="" id="tool">In winkelkar</a>
              <p class="shop-section__price">€80</p>
            </div>
          </section>
          <section class="shop-section">
            <div class="shop-section__grap">
              <h2 class="section-title shop-section__title">Veiligheids Kit</h2>
              <img class="shop-section__image" src="./assets/img/veilig-kit.png" alt="veiligheids kit" width="310">
            </div>
            <div class="shop-section__text">
              <ul class="shop-list">
                <li>Veiligheid glazen</li>
                <li>Stevige werkschoenen</li>
                <li>EHBO-kit</li>
              </ul>
              <a class="shop-button" href="" id="veiligheid">In winkelkar</a>
              <p class="shop-section__price">€30</p>
            </div>
          </section>
        </div>
    </article>

    <div class="shop-basket__grid">
      <article class="shop-basket">
        <h2 class="display-none">Winkelkar</h2>
        <ul class="shop-basket__items">
        </ul>
        <img class="shop-basket__image" src="./assets/img/winkelkar.png" alt="winkelkar" width="300">
      </article>
      <article class="shop-checkout">
        <p class="shop-banner"></p>
        <div class="shop-maxwidth">
          <h2 class="section-title white-color step__title shop-checkout__title">Bestellen</h2>
          <p class="step-one__text text-center"> <em>Goed zo!</em> Als je iets bestelt weet je duidelijk van aanpakken. Enkel focussen op de hoofdzaak is heel belangrijk. Vul hieronder je gegevens in en we bezorgen je zo snel mogelijk je pakketje.</p>
          <form method="post" class="shop-form" action="index.php?page=shop">
            <input type="hidden" class=kittool name="tool" value="0">
            <input type="hidden" class=kitveiligheid name="veiligheid" value="0">
            <input type="hidden" class=kitgrondstof name="grondstof" value="0">
            <input type="hidden" name="action" value="placeOrder">
            <div class="labels-name">
              <div>
                <p class="error"></p>
                <label class="label">
                  <input class="label-input input" required type="text" name="name" placeholder=" " minlength="2" maxlength="35">
                  <p class="label-text">Voornaam</p>
                  <span class="label-counter"></span>
                </label>
              </div>
              <div>
                <p class="error"></p>
                <label class="label">
                  <input class="label-input input" type="text" required name="sirname" placeholder=" " minlength="2" maxlength="35">
                  <p class="label-text">Naam</p>
                  <span class="label-counter"></span>
                </label>
              </div>
            </div>

            <div class="label-adresses">
              <p class="label-adres__info"> <img src="./assets/img/info-button.png" alt="info button" width="20"> straatnaam, huisnummer, postcode en stad</p>
              <p class="error"></p>
              <label class="label label-adres">
                <input class="label-input label-adres input" required name="adres" minlength="10" type="text" placeholder=" " maxlength="99">
                <p class="label-text">Adres</p>
                <span class="label-counter"></span>
              </label>
            </div>
            <div class="shop-confirm">
              <p class="shop-confirm__price"> Prijs: <span class="shop-confirm__price-bold">€ <input type="hidden" class="price" name="price" value="0"> <span class=price-total>0</span></span></p>
              <input type="submit" class="shop-confirm__submit button" value="Bestel">
            </div>
          </form>
        </div>
      </article>
    </div>
</main>
