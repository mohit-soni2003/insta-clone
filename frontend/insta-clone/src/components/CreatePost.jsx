import React, { useState, useEffect } from 'react'
import "./CreatePost.css"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";


export default function CreatePost() {

    const navigate = useNavigate()

    const [body, setbody] = useState("")
    const [Image, setImage] = useState("")
    const [url, seturl] = useState("")

    //Toast Function --------- ------ --------- -------

    const notifyA = (msg) => toast.success(msg)
    const notifyB = (msg) => toast.error(msg)

    // when the url is set by cloudanary then useEffwct is run 

    useEffect(() => {
        //Saving post to mongodb

        if (url) {
            fetch("http://localhost:8080/createPost",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("jwt")
                    },
                    body: JSON.stringify({
                        body,
                        pic: url
                    })
                }
            )
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        notifyB(data.error)
                    }
                    else {
                        notifyA("Successsfully Posted")
                        navigate("/")
                    }
                })
                .catch(err => console.log(err))
        }

    }, [url])


    //posting image to cloudinary--------- ---------- ---------- ------- 

    const postDetails = () => {
        if (!Image) {
            notifyB("Please Select Image")
        }
        console.log(Image, body)
        const data = new FormData();
        data.append("file", Image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "mohitcloud2003")
        fetch("https://api.cloudinary.com/v1_1/mohitcloud2003/image/upload",
            {
                method: "post",
                body: data
            })
            .then(res => res.json())
            .then(data => seturl(data.url))
            .catch(err => { console.log(err) })

        //Saving post to mongodb

    }



    const handleBodyChange = (event) => {
        console.log(event.target)
        setbody(event.target.value)
    }



    const loadFile = (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory

            setImage(event.target.files[0])
        }

    }
    return (
        <div className="create-post">

            {/* {header} */}

            <div className="post-header">
                <h4>Create New Post</h4>
                <button id="post-btn" onClick={postDetails}>Share</button>
            </div>

            {/* image preview */}

            <div className="main-div">
                <img id='output' src='data:image/png;base64,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' />
                <input type="file" accept='image/*' onChange={loadFile} />
            </div>

            {/* {detaile} */}

            <div className="details">
                <div className="card-header">
                    <div className="card-pic">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmUlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <h5>Ramesh</h5>
                </div>

                <textarea value={body} onChange={handleBodyChange} type="text" placeholder='write a caption' name="" id=""></textarea>

            </div>
        </div>
    )
}
