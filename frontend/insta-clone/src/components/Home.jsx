import "./Home.css"
export default function Home(){
    return(
        
        <div className="home">
            {/* card */}

            <div className="card">
                {/* card-header */}
                <div className="card-header">
                    <div className="card-pic">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <h5>Ramesh</h5>
                </div>
                {/* card image */}
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                {/* card-content */}
                <div className="card-content">
                <span className="material-symbols-outlined">favorite</span>
                <p>1 Like</p>
                <p>this is caption</p>
                </div>
                {/* card-comment */}
                <div className="add-comment">
                <span className="material-symbols-outlined smiley-icon">mood</span>
                <input type="text" placeholder="Add a comment" />
                <button className="comment">Post</button>

                </div>
            </div>
        </div>
    )
}