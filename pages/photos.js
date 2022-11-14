import HeadInfo from "../components/HeadInfo"
import Image from "next/image"
import photosStyles from "../styles/Photos.module.css"
import Link from "next/link"
  const photos = ({photos}) => {
    return(
        <div>
            <HeadInfo title="My Blog Photos"/>
            <h1>My Photos</h1>
            <ul className={photosStyles.photos}>
              {photos.map(photo =>(
                <li key={photo.id}>
                  {/* 가져오는 이미지 데이터의 src주소는 외부URL을 사용하고있음 
                      그래서 외부URL사용시에는 next.config에 따로 설정해야한다*/}
                  <Link href={`/photos/${photo.id}`}>
                    <Image
                    src={photo.thumbnailUrl}
                    width={100}
                    height={100}
                    alt={photo.title}
                    />
                  </Link>
                </li>
              ))}
            </ul>
        </div>
    )
  }

  export const getStaticProps = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.json();
  
    return{
      props:{
        photos
      }
    }
  }
  

  export default photos