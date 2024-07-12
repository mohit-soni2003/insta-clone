import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Home.css"
export default function Home() {
    const navigate = useNavigate();
    const [data, setdata] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("jwt")
        if (!token) {
            navigate("./signup")
        }
        //Fetch posts from server
        fetch("http://localhost:8080/allpost", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
            .then(result => setdata(result))
            .catch(err => console.log(err))
    }, [])


    return (

        <div className="home">
            {/* card */}

            {data.map((posts) => {
                console.log(posts)
                return (
                    <div className="card">
                        {/* card-header */}
                        <div className="card-header">
                            <div className="card-pic">
                                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                            </div>
                            <h5>{posts.postedBy.name}</h5>
                        </div>
                        {/* card image */}
                        <div className="card-image">
                            <img src={posts.photo} alt="" />
                        </div>
                        {/* card-content */}
                        <div className="card-content">
                            <span className="material-symbols-outlined">favorite</span>
                            <p>1 Likes</p>
                            <p>{posts.body}</p>
                        </div>
                        {/* card-comment */}
                        <div className="add-comment">
                            <span className="material-symbols-outlined smiley-icon">mood</span>
                            <input type="text" placeholder="Add a comment" />
                            <button className="comment">Post</button>

                        </div>
                    </div>
                )
            })}

        </div>
    )
}