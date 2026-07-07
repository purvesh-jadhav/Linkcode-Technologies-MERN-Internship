import {
  FaTv,
  FaDownload,
  FaEarthAmericas,
  FaUser,
} from "react-icons/fa6";

function Reasons() {
  return (
    <div className="reasons">
      <h2 id="reasons-heading">More reasons to join</h2>

      <div id="reason-card-1">
        <h2 id="reason-card-heading">Enjoy on your TV</h2>

        <p id="reason-desc">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          Blu-ray players and more.
        </p>

        <FaTv />
      </div>

      <div id="reason-card-2">
        <h2 id="reason-card-heading">Download your shows</h2>

        <p id="reason-desc">
          Save your favourites easily and always have something to watch.
        </p>

        <FaDownload />
      </div>

      <div id="reason-card-3">
        <h2 id="reason-card-heading">Watch everywhere</h2>

        <p id="reason-desc">
          Stream unlimited movies and TV shows on your phone, tablet,
          laptop, and TV.
        </p>

        <FaEarthAmericas />
      </div>

      <div id="reason-card-4">
        <h2 id="reason-card-heading">Create profiles for kids</h2>

        <p id="reason-desc">
          Send children on adventures with their favourite characters in
          a space made just for them.
        </p>

        <FaUser />
      </div>
    </div>
  );
}

export default Reasons;