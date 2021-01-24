<main class="container">
  <div class="tutorial-one">
    <nav>
      <a href="index.php?page=home" class=button-home>Home</a>
    </nav>

    <article class="header">
      <div class="header-background">
        <h1 class="header__title d3">De diy hoverscraft <span class="header__title-bold">TUTORIAL</span></h1>
      </div>

      <section class="header-section">
        <h2 class="section-title">De benodigdheden</h2>
        <div id="image-slider" class="splide">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide"><img src="./assets/img/zaag1.png" alt="zaag" width="100"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
              <li class="splide__slide"></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="header-section header-section__ready">
        <h2 class="section-title">Ben je er klaar voor?</h2>
        <p class="section__message"></p>
        <div class="header-section__buttons">
          <a href="index.php?page=tutorial&step=0" class="button">Ja!</a>
          <a href="" class="button">Nee...</a>
        </div>
      </section>
    </article>
  </div>

  <div class=" step-black-max">
    <article class="step-black">
      <h2 id="one" class="section-title white-color step__title">Stap <span class="step__title-number">1</span></h2>

      <div class="step-sources">
        <div class="step-sources__items">
          <div class="step-sources__item"><img src="./assets/img/zaag1.png" alt="zaag" class="step-sources__image" width="100"></div>
          <div class="step-sources__item"><img src="./assets/img/plank1.png" alt="plank" width="67"></div>
        </div>
        <p class="step-one__text">Gebruik die spierballen van je om twee cirkels uit hout te zagen.
        Een van straal 60 cm en een van straal 5 cm.</p>
      </div>

      <div class="step-interact max">
        <div class="step-interact__saw">
          <div class="step-interact__yellowLine">
            <div class="step-interact__button">
              <img src="./assets/img/point.png" alt="hand" width="15">
            </div>
            <img class="step-interact__image" draggable="false" src="./assets/img/zaag-full.png" alt="plank interact" width="200">
          </div>
        </div>
        <div class="step-interact__wood">
          <div class="step-interact__circle-one z-prior dashed">
          </div>
          <div class="step-interact__circle-two dashed">
          </div>
          <img src="./assets/img/wood.png" draggable="false" alt="plank interact" width="270" height="auto">
        </div>
      </div>

      <section class="step__goal goal-step1">
        <h2 class="section-title stepGoal-title">To Do</h2>
        <div claas="step__goal-labels">
          <label class="step__goal-label">
            <p class="section-title step__goal-title">Zaag de eerste cirkel</p><input class="step__goal-check check-hout1" type="checkbox"><span class="checkmark"></span>
          </label>

          <label class="step__goal-label">
            <p class="section-title step__goal-title">Zaag de tweede cirkel</p><input class="step__goal-check check-hout2" type="checkbox"><span class="checkmark"></span>
          </label>
        </div>
      </section>
    </article>
  </div>

  <div class="arrow-after">
  </div>

  <div class=" step-max">
  <article class="step">
      <h2 id="twee" class="section-title step__title">Stap <span class="step__title-number-white">2</span></h2>

      <div class="step-sources">
        <ul class="step-sources__items">
          <li class="step-sources__item-white"><img src="./assets/img/hout1wit.png" alt="hout" class="step-sources__image" width="90"></li>
          <li class="step-sources__item-white"><img src="./assets/img/bladblazerwit.png" alt="bladblazer" width="67"></li>
        </ul>
        <p class="step-one__text-black">Zaag een gat ter grootte van een bladblazermondstuk in je de eerste cirkel.</p>
      </div>

      <div class="step-interact-meter-saw dashed-grey">
        <div class="step-interact__saw-black grid">
          <div class="step-interact__yellowLine-meter-saw interact-saw-meter black">
            <div class="step-interact__button">
              <img src="./assets/img/point.png" alt="hand" width="15">
            </div>
            <img class="step-interact__image-white" src="./assets/img/sawfullwit.png" alt="plank interact" width="150">
          </div>
          <div class="black interact-rolmeter middle-real">
            <div class="step-interact__button pos-hand">
              <img src="./assets/img/point.png" alt="hand" width="15">
            </div>
            <img class="image-rolmeter" src="./assets/img/rolmeter-wit.png" alt="rol meter" width="60">
          </div>
        </div>
        <div class="step-interact__wood-black middle">
          <div class="rolmeter">
            <canvas class="canvas" id="canvas" width="200" height="250"></canvas>
            <img class="rotate" src="./assets/img/bladblazerwit.png" alt="bladblazer" width="200">
          </div>
        </div>
        <div class="step-interact__wood-black interact-saw-meter-cursor middle-real ">
          <img class="black2" src="./assets/img/hout1wit.png" alt="plank interact" width="240" height="auto">
        </div>
      </div>

      <section class="step__goal goal-step2">
        <h2 class="section-title stepGoal-title">To Do</h2>
          <div class="step__goal-labels">
          <label class="step__goal-label">
            <p class="section-title step__goal-title">Meet het bladblazer- <br> mondstuk</p><input class="step__goal-check goal-meter" type="checkbox"><span class="checkmark"></span>
          </label>

          <label class="step__goal-label">
            <p class="section-title step__goal-title">Snij gat in cirkel 1</p><input class="step__goal-check goal-meter-saw" type="checkbox"><span class="checkmark"></span>
          </label>
        </div>
      </section>
  </article>
</div>

    <div class="arrow-before">
    </div>

    <div class="step-black-max">
      <article class="step-black step-two">
        <h2 id="drie" class="section-title white-color step__title">Stap <span class="step__title-number">3</span></h2>

        <div class="step-sources">
          <div class="step-sources__items">
            <div class="step-sources__item"><img src="./assets/img/plastic-rol.png" alt="plastic rol" width="90"></div>
            <div class="step-sources__item"><img src="./assets/img/hout-staptwee.png" alt="hout plank twee" width="90"></div>
          </div>
          <p class="step-one__text">Snij een cirkel uit het zeildoek van straal 80cm en leg de grote houten cirkel perfect in het midden.</p>
        </div>

        <div class="step-interact-two dashed-grey">
          <div class="step-interact__wood-two">
            <div class="step-interact__yellowLine-wood">
              <div class="step-interact__button">
                <img src="./assets/img/hand.png" alt="hand" width="20">
              </div>
              <div class="container">
                <div class="box box-image box-width" draggable="true"></div>
              </div>
            </div>
          </div>
          <div class="step-interact__zeil">
            <div class="container container-target">
              <div class="box boxtarget" draggable="true"></div>
            </div>
            <img class="zeil" src="./assets/img/zeil-breekmes.png" alt="plank interact" width="330" height="auto">
          </div>
        </div>

        <section class="step__goal goal-step2">
          <h2 class="section-title stepGoal-title">To Do</h2>
          <div class="step__goal-labels">
            <label class="step__goal-label">
              <p class="section-title step__goal-title">Snij een cirkel uit het zeil.</p>
              <input class="step__goal-check check-zeil" type="checkbox">
              <span class="checkmark"></span>
            </label>

            <label class="step__goal-label">
              <p class="section-title step__goal-title">Leg hout op het zeil</p>
              <input class="step__goal-check check-zeil" type="checkbox">
              <span class="checkmark"></span>
            </label>
          </div>
        </section>
      </article>
    </div>


    <div class="arrow-after">
    </div>

    <div class=" step-max">
    <article class="step">
      <h2 id="vier" class="section-title step__title">Stap <span class="step__title-number-white">4</span></h2>

      <div class="step-sources">
        <ul class="step-sources__items">
          <li class="step-sources__item-white"><img src="./assets/img/hout1wit.png" alt="hout" class="step-sources__image" width="90"></li>
          <li class="step-sources__item-white"><img src="./assets/img/bladblazerwit.png" alt="bladblazer" width="67"></li>
        </ul>
        <p class="step-one__text-black">Vouw de restjes zeildoek toe en plak ze vast met ducktape.</p>
      </div>

      <div class="step-interact">
        <div class="step-interact__saw-black">
          <div class="step-interact__yellowLine">
            <div class="step-interact__button">
              <img src="./assets/img/hand.png" alt="hand" width="20">
            </div>
            <div>
              <img src="" alt="">
            </div>
            <img class="step-interact__image-white" src="./assets/img/sawfullwit.png" alt="plank interact" width="150">
          </div>
        </div>
        <div>
          <img src="./assets/img/bladblazerwit.png" alt="bladblazer" width="200">
        </div>
        <div class="step-interact__wood-black">
          <img src="./assets/img/hout1wit.png" alt="plank interact" width="240" height="auto">
        </div>
      </div>

      <section class="step__goal goal-step2">
        <h2 class="section-title stepGoal-title">To Do</h2>

        <label class="step__goal-label">
          <p class="section-title step__goal-title">Ducktape de losse <br> stukken plastic vast</p><input class="step__goal-check" type="checkbox"><span class="checkmark"></span>
        </label>

      </section>
  </article>
</div>

  <div class="arrow-before">
  </div>

  <div class="step-black-max">
  <article class="step-black   step-two step-three__goals">
      <h2 id="vijf" class="section-title white-color step__title">Stap <span class="step__title-number">5</span></h2>

      <div class="step-sources">
        <div class="step-sources__items">
          <div class="step-sources__item"><img src="./assets/img/hout2.png" alt="hout" width="80"></div>
          <div class="step-sources__item"><img src="./assets/img/nagel.png" alt="nagel" width="10"></div>
          <div class="step-sources__item"><img src="./assets/img/bladblazer.png" alt="nagel" width="70"></div>
        </div>
        <p class="step-one__text">Keer je creatie om en schroef de kleine houten cirkel vast in het midden. En snij rondom deze cirkel en 6 gaten waar lucht kan ontsnappen. Plak daarna de bladblazer vast en voila.</p>
      </div>

      <div class="step-interact-two">
        <div class="step-interact__wood-two">
          <div class="step-interact__yellowLine-wood">
            <div class="step-interact__button">
              <img src="./assets/img/hand.png" alt="hand" width="20">
            </div>
            <img src="./assets/img/hout-staptwee.png" alt="plank interact" width="200">
          </div>
        </div>
        <div class="step-interact__zeil">
          <img src="./assets/img/zeil-breekmes.png" alt="plank interact" width="290" height="auto">
        </div>
      </div>

      <section class="step__goal">
        <h2 class="section-title stepGoal-title">To Do</h2>
        <div class="step__goal-labels">
          <label class="step__goal-label">
            <p class="section-title step__goal-title">Schroef de houten <br> cirkel vast</p><input class="step__goal-check" type="checkbox"><span class="checkmark"></span>
          </label>

          <label class="step__goal-label">
            <p class="section-title step__goal-title">Snijluchtgaten in <br>het zeil</p><input class="step__goal-check" type="checkbox"><span class="checkmark"></span>
          </label>

          <label class="step__goal-label">
            <p class="section-title step__goal-title">Plaats de Bladblazer</p><input class="step__goal-check" type="checkbox"><span class="checkmark"></span>
          </label>
        </div>
      </section>
  </article>
</div>

  <div class="arrow-after">
  </div>
  <div>
    <p>En nu</p>
    <p>Racen maar</p>
  </div>
</main>
