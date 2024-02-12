import { CreateClient, createClient } from 'contentful'
import { useEffect, useState } from 'react'

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
            {blogPosts?.items?.map((data) => {
                
            })}
        </>
    )
}