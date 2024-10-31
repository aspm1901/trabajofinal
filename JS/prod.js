document.addEventListener("DOMContentLoaded", function () {});

const Prod = () => (
  <div
    class="game-card"
    data-category="free"
    onclick="showDetails('free_game1')"
  >
    <img src="./imágenes/free2play1.jpg" alt="Free Game 1" />
    <div class="price-discount-box">
      <h3>The First Descendant</h3>
      <p>Free to Play</p>
      <span class="favorite" onclick="toggleFavorite(event, this)">
        ☆
      </span>
    </div>
  </div>
);

const Header2 = () => (
  <div>
    <header>
      <div class="header-logo">
        <img src="FOTITOS/logo.png" alt="GameVerse Logo" class="logo" />
        <h1>GameVerse</h1>
      </div>
      <div id="categories">
        <button onclick="filterGames('all')">All</button>
        <button onclick="filterGames('free')">Free to Play</button>
        <button onclick="filterGames('action')">Action</button>
        <button onclick="filterGames('sport')">Sport</button>
        <button onclick="filterGames('adventure')">Adventure</button>
      </div>
    </header>
  </div>
);

function filterGames(category) {
  const games = document.querySelectorAll(".game-card");
  games.forEach((game) => {
    if (category === "all" || game.getAttribute("data-category") === category) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}
