import FrostedGlass from "@components/FrostedGlass";
import { gql } from '@apollo/client';
import { client } from "util/graphql-client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface IBlog{
    posts: Post[]
}

 export interface Post{
    author: string,
    description: string,
    title: string,
    _id: string
}

export interface PostsResponse{
    posts: {
        data: Post[]
    }
}

export default function Blog({ posts } : IBlog){
    return(<>
    <h1>Blog Posts</h1>
    {posts.map(post =>{
        return <FrostedGlass key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>by {post.author}</p>
        </FrostedGlass>
    })}
    </>)
}

const POSTS = gql`
    query GetPosts{
        posts{
            data{
               author,
               description,
               title,
               _id
            }
        }
    }
`

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data, error } = await client.query<PostsResponse>({
        query: POSTS
    });
    if(error){
        console.error(error);
    }
    return {
        props: {
            posts: data.posts.data
        }
    }
}