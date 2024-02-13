import { useEffect, useState } from "react"
import { createClient } from 'contentful'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./BlogDetails.scss"


export const BlogDetails = () => {

    const [blogDetails, setBlogDetails] = useState([])
    const {id} = useParams()

    const Client = createClient({space: "cfeu0p3pmc98", accessToken: "GmkuAPiFgeO0srK9RQNCpRfTW9M6sEuE4twtUTp4QpQ"})

    useEffect(() => {
        const  getEntryById = async () => {
            try {
                await Client.getEntry(id).then((entries) => {
                    setBlogDetails(entries)
                    console.log(entries)
                })
            }
            catch (err) {
                console.error(err)
            }
        }
        getEntryById()
    }, [id])


    return (
        <section className="blogContainer">
            <article>
            <h1>{blogDetails?.fields?.blogTitle}</h1>
            <img src={blogDetails?.fields?.blogImage?.fields?.file?.url} alt={blogDetails?.fields?.blogTitle} />
            <h4>Af {blogDetails?.fields?.author}</h4>
            <div className="postDescription">
                <p>{blogDetails?.fields?.postContent}</p>
            </div>
            <Link to="/">Tilbage</Link>
            </article>
        </section>
        
    )
}