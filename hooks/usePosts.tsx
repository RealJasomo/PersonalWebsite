import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const POSTS = gql`
    query GetPosts{
        posts{
            data{
               author,
               description,
               title
            }
        }
    }
`

export default function usePosts(){
    const { loading, error, data} = useQuery(POSTS);
    return [data, loading, error];
}