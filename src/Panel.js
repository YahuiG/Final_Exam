import "./App.css";

export default function Panel({ src, name, children, isActive, onShow }) {
  return (
    <div>
      <img className="img" src={src} />
      {isActive ? (
        <div>
          <br />
          <img className="enlarge" src={src} />
          <ul className="content">{children}</ul>
        </div>
      ) : (
        <span onClick={onShow}>{name}</span>
      )}
    </div>
  );
}
