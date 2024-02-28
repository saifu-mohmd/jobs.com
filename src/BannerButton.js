function BannerButton(props) {
  return (
    <div className="btn google-play">
      {props.bannerbutton}
      <div className="google-play-logo-section">
        <div className="google-play-logo">
          <div className="google-play-img">
            <img src={props.bannerbuttonimg} alt="google-play-logo" />
          </div>
        </div>
      </div>
      <div className="google-play-text">{props.bannerbuttontitle}</div>
    </div>
  );
}

export default BannerButton;
