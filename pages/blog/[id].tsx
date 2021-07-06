import { GetServerSideProps } from "next";
import { gql } from '@apollo/client';
import { client } from "util/graphql-client";
import Markdown from 'react-markdown'

const gfm = require('remark-gfm');

interface IBlogPost{
    data: PostWithContent
}
export default function BlogPost({ data }: IBlogPost){
    console.log(data);
    return <>
    <h1>{data?.title}</h1>
    <p>by {data?.author}</p>
    <p>{data?.description}</p>
    <hr/>
    <Markdown remarkPlugins={[gfm]}>{data?.content}</Markdown>
    </>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

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