const element = (
  // Write your code here.
  <div className="Main-Container">
    <h1 className="heading">Congratulations</h1>
    <div className="Profile-Card">
      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1>Kiran V</h1>
      <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
