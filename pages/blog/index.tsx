import usePosts from "hooks/usePosts"

export default function Blog(){
    const [data, loading, error] = usePosts();
    console.log(data, loading, error);
    return(<>
    <h1>Blog Posts</h1>
    
    </>)
}