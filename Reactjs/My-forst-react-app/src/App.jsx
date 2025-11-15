import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function App(){
  let users = [
  {
    "id": 1,
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "avatar": "https://dummyjson.com/image/50x50/008080/ffffff?text=AS",
    "profile_picture": "https://dummyjson.com/image/200x200/FF5733/ffffff?text=Alice",
    "bio": "Frontend developer with a passion for clean code and user experience."
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "avatar": "https://dummyjson.com/image/50x50/000080/ffffff?text=BJ",
    "profile_picture": "https://dummyjson.com/image/200x200/33FF57/ffffff?text=Bob",
    "bio": "Backend engineer specializing in scalable and efficient systems."
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "avatar": "https://dummyjson.com/image/50x50/800080/ffffff?text=CB",
    "profile_picture": "https://dummyjson.com/image/200x200/5733FF/ffffff?text=Charlie",
    "bio": "UI/UX designer focused on creating intuitive and engaging interfaces."
  },
  {
    "id": 1,
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "avatar": "https://dummyjson.com/image/50x50/008080/ffffff?text=AS",
    "profile_picture": "https://dummyjson.com/image/200x200/FF5733/ffffff?text=Alice",
    "bio": "Frontend developer with a passion for clean code and user experience."
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "avatar": "https://dummyjson.com/image/50x50/000080/ffffff?text=BJ",
    "profile_picture": "https://dummyjson.com/image/200x200/33FF57/ffffff?text=Bob",
    "bio": "Backend engineer specializing in scalable and efficient systems."
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "avatar": "https://dummyjson.com/image/50x50/800080/ffffff?text=CB",
    "profile_picture": "https://dummyjson.com/image/200x200/5733FF/ffffff?text=Charlie",
    "bio": "UI/UX designer focused on creating intuitive and engaging interfaces."
  },
  {
    "id": 1,
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "avatar": "https://dummyjson.com/image/50x50/008080/ffffff?text=AS",
    "profile_picture": "https://dummyjson.com/image/200x200/FF5733/ffffff?text=Alice",
    "bio": "Frontend developer with a passion for clean code and user experience."
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "avatar": "https://dummyjson.com/image/50x50/000080/ffffff?text=BJ",
    "profile_picture": "https://dummyjson.com/image/200x200/33FF57/ffffff?text=Bob",
    "bio": "Backend engineer specializing in scalable and efficient systems."
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "avatar": "https://dummyjson.com/image/50x50/800080/ffffff?text=CB",
    "profile_picture": "https://dummyjson.com/image/200x200/5733FF/ffffff?text=Charlie",
    "bio": "UI/UX designer focused on creating intuitive and engaging interfaces."
  },{
    "id": 1,
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "avatar": "https://dummyjson.com/image/50x50/008080/ffffff?text=AS",
    "profile_picture": "https://dummyjson.com/image/200x200/FF5733/ffffff?text=Alice",
    "bio": "Frontend developer with a passion for clean code and user experience."
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "avatar": "https://dummyjson.com/image/50x50/000080/ffffff?text=BJ",
    "profile_picture": "https://dummyjson.com/image/200x200/33FF57/ffffff?text=Bob",
    "bio": "Backend engineer specializing in scalable and efficient systems."
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "avatar": "https://dummyjson.com/image/50x50/800080/ffffff?text=CB",
    "profile_picture": "https://dummyjson.com/image/200x200/5733FF/ffffff?text=Charlie",
    "bio": "UI/UX designer focused on creating intuitive and engaging interfaces."
  },{
    "id": 1,
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "avatar": "https://dummyjson.com/image/50x50/008080/ffffff?text=AS",
    "profile_picture": "https://dummyjson.com/image/200x200/FF5733/ffffff?text=Alice",
    "bio": "Frontend developer with a passion for clean code and user experience."
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "avatar": "https://dummyjson.com/image/50x50/000080/ffffff?text=BJ",
    "profile_picture": "https://dummyjson.com/image/200x200/33FF57/ffffff?text=Bob",
    "bio": "Backend engineer specializing in scalable and efficient systems."
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "avatar": "https://dummyjson.com/image/50x50/800080/ffffff?text=CB",
    "profile_picture": "https://dummyjson.com/image/200x200/5733FF/ffffff?text=Charlie",
    "bio": "UI/UX designer focused on creating intuitive and engaging interfaces."
  }
  ] 
  return <>
            <Navbar />
            <div className="parent">
              {
                users.map(function(user,idx){
                  return <Card data = {user} key={idx}/>
                })
              }
          </div>
          </>
}