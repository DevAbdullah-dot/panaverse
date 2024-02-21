import { postdata } from "@/app/data/postdata"

async function getPostdata(id: string){
    const post = postdata.find(post => post.id === id)
    return post
}

export async function getStaticParams(){
    const ids: string[] = ['1','2']
    return ids.map((id) => ({id:id}))
}

export default async function postwithId({params}: {params: {id: string}}){
    const {id} = params;
    const post = await getPostdata(id);
    return (
        <>
        <div className="flex flex-col items-center justify-between p-24">
            <h1>{post?.title}</h1>
            <h1>{post?.date}</h1>
        </div>
        </>
    )
}