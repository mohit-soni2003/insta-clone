import "./Profile.css"
export default function Profile() {
    return (
        <>
            <div className="profile">
                {/* profile-frame */}
                <div className="profile-frame">
                    {/* profile-pic */}
                    <div className="profile-pic">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    {/* profile-data */}
                    <div className="profile-data">
                        <div className="profile-name">Jackpot Coder</div>
                        <div className="profile-info">
                            <p>40 posts</p>
                            <p>40 followers</p>
                            <p>40 follow</p>
                        </div>
                    </div>

                </div>

            <hr style={{
                width:"95%",
                margin:"25px auto",
                opacity :"0.8",


            }}/>
            {/* {profile gallery} */}

            <div className="gallery">
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            </div>
        </>
    )
}