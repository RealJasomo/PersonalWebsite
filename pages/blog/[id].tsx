import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from '@apollo/client';
import { client } from "util/graphql-client";
import Markdown from 'react-markdown'
import { POSTS, PostsResponse } from ".";

const gfm = require('remark-gfm');

import styles from './post.module.scss';

interface IBlogPost{
    data: PostWithContent
}
export default function BlogPost({ data }: IBlogPost){
    return (
    <div className={styles.post}>
        <div className={styles.header}>
            <h1>{data?.title}</h1>
            <p>by {data?.author}</p>
            <p>{data?.description}</p>
            <hr/>
        </div>
        <div className={styles.content}>
            <Markdown remarkPlugins={[gfm]}>{data?.content}</Markdown>
        </div>
    </div>);
}

const GET_POST_BY_ID = gql`
query FindPostById($id: ID!){
        findPostByID(id: $id){
            _id
            author
            description
            content
            title
        }
    }
`;

interface PostWithContent{
    _id: string,
    author: string,
    description: string,
    content: string,
    title: string
}

interface PostWithContentResponse{
    findPostByID: PostWithContent
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as any;

    const { data, error } = await client.query<PostWithContentResponse>({
        query: GET_POST_BY_ID,
        variables:{
            id
        }
    });
    if(error){
        console.error(error);
    }
    return {
        props:{
            data: data.findPostByID
        }
    }
}

export const getStaticPaths: GetStaticPaths  = async () => {
    const { data } = await client.query<PostsResponse>({
        query: POSTS
    });
    const paths = data.posts.data.map(post => ({
        params: {id: post._id}
    }));
    return { paths, fallback: false };
}