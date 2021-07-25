import FrostedGlass from "@components/FrostedGlass";
import { ApolloError, gql } from '@apollo/client';
import { client } from "util/graphql-client";
import { GetStaticProps } from "next";
import Link from 'next/link'

import Button from '@material-ui/core/Button';

import styles from './blog.module.scss';

interface IBlog{
    posts: Post[],
    error?: ApolloError
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

export default function Blog({ posts , error} : IBlog){
    console.log(error);
    return(<>
    <h1>Blog Posts</h1>
    {posts.map(post =>{
        return <FrostedGlass key={post._id}>
            <div className={styles.post}>    
                <div className={styles.left}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <p>by {post.author}</p>
                </div>
                <div className={styles.right}>
                    <Link href={`/blog/${post._id}`}>
                        <Button>Show Post</Button>
                    </Link>
                </div>
            </div>
        </FrostedGlass>
    })}
    </>)
}

export const POSTS = gql`
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

export const getStaticProps: GetStaticProps = async (context) => {
    const { data, error } = await client.query<PostsResponse>({
        query: POSTS
    });
    if(error){
        console.error(error);
    }
    return {
        props: {
            posts: data.posts.data,
            ...(error&&{ error })
            }
    }
}

