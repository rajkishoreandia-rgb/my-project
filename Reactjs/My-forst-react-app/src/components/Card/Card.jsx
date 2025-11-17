export default function Card(props) {
  return (
    <div className="parent">
      {
        props.details.map(function (user,idx) {
         return(<div className="card" key={idx}>
            <img src={user.profileUrl} />
            <div className="top-card">
              <h1>{user.name}</h1>
            </div>
            <div className="mid-card-section">
              <h3>{user.profession}</h3>
              <p>{user.address}</p>
            </div>
          </div>
         )
        })
      }
    </div>

  )
}
