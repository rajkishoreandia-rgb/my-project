import { MoveRight } from "lucide-react";

export default function Card(props) {
console.log(props.data);
const {name,profile_picture,bio} = props.data;
  return (
    <div className="card">
        <img src={profile_picture}/>
        <div className="top-card">
            <h1>{name}</h1>
        </div>
        <div className="mid-card-section">
            <p>{bio}</p>
        </div>
        <div className="bottom-card-section">
            <div className="exploreBtn">Explore</div>
            <div className="iconCss"><MoveRight color="green" size={20} /></div>
        </div>
    </div>
  )
}
