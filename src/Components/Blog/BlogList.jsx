import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import "./blogList.scss"
import { Link } from 'react-router-dom'

export const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([])
    const Client = createClient({space: "cfeu0p3pmc98", accessToken: "GmkuAPiFgeO0srK9RQNCpRfTW9M6sEuE4twtUTp4QpQ"})

    

    useEffect(() => {
        const getAllEntries = async () => {
            try {
                await Client.getEntries().then((entries) => {
                    console.log(entries)
                    setBlogPosts(entries)
                })
            }catch (err) {
                console.error(err)
            }
        }
        getAllEntries()
    }, [])
    return (
        <>
            <h1>Blogs</h1>
           {blogPosts?.items?.map((post) => (
            <section className='blogListStyles' key={post?.sys?.id}>
                <article>
                    <header>
                        <h2>{post?.fields?.blogTitle}</h2>
                    </header>
                    <img src={post?.fields?.blogImage?.fields?.file?.url} alt={post?.fields?.blogTitle} />
                    <h4>Af {post?.fields?.author}</h4>
                    <p>{post?.fields?.blogSummary}</p>
                    <div className='buttonContainer'>
                        <Link to={`/blogDetails/${post.sys.id}`}>læs mere</Link>
                    </div>
                 </article>
            </section>
           ))}
        </>
    )
}