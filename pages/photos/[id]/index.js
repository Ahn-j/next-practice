import Image from "next/image"
import Link from "next/link" 

const index = ({photo}) => {
console.log("HIEEE")
    const {title, url} = photo
    return(
        <div>
            <h2>{title}</h2>
            <Image
            src={url}
            width={500}
            height={500}
            alt={photo.title}
            />

            <Link href="/photos">
                Back</Link>
        </div>
    )
}
export const getStaticProps = async(context)=>{
    console.log(context.params)
    const {id } = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await res.json();
  
    return{
      props:{
        photo
      }
    }
}
//다이나믹 SSG페이지는 getStaticPaths를 사용해야한다
export const getStaticPaths = async() =>{
    console.log("path")
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.json();
    const ids = photos.map(photo=>photo.id);
    const paths = ids.map(id=>{
        return{
            params: {id: id.toString()}
        }
    })
    return{
        paths:paths,
        fallback: false,
    }
}

export default index