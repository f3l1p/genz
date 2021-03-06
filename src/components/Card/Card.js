export const Card = ({ info }) => {
  return (
    <>
      <div className="card">
        <img src={info.icon} alt="icon" className="icon" />
        <div className="iconDiv">
          <p className="titleCard">{info.title}</p>
        </div>
        <div className="linearGradient">
          <div className="text">
            <div className="line"></div>
            <p>{info.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
