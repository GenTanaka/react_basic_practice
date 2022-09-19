import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <h3>Name: {props.name}</h3>
      <h3>age: {props.age}</h3>
      <h3>from: {props.country}</h3>
    </div>
  );
};


export default Profile;
