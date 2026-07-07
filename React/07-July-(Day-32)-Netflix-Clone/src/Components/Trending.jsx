import bhootBangla from "../assets/Bhooth-Bangla_Poster-9dcacac0-1de7-11f1-978a-cfe6a2e40a5e.jpg";
import chhaava from "../assets/Chhaava-306x393.jpg";
import maaBehen from "../assets/MaaBehen-306x393.jpg";
import kara from "../assets/kara-telugu-poster-v0-tjga1ljlpgwg1.webp";
import dhurandhar from "../assets/Dhurandhar-–-The-Revenge.jpeg";

function Trending() {
  return (
    <div className="posters">
      <h2 id="trending-heading">Trending Now</h2>

      <div className="poster-cards">
        <img
          src={bhootBangla}
          height="250px"
          id="bhoot-bangla-img"
          alt="Bhooth Bangla"
        />

        <img
          src={chhaava}
          height="250px"
          id="chava-img"
          alt="Chhaava"
        />

        <img
          src={maaBehen}
          height="250px"
          id="mabhen-img"
          alt="Maa Behen"
        />

        <img
          src={kara}
          height="250px"
          id="kara-img"
          alt="Kara"
        />

        <img
          src={dhurandhar}
          height="250px"
          id="dhurandhar-img"
          alt="Dhurandhar"
        />
      </div>
    </div>
  );
}

export default Trending;