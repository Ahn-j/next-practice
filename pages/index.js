import HeadInfo from '../components/HeadInfo'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <div>
      <HeadInfo title="My Blog"/>
      <h1>Hi!!</h1>
      <ul>
        {posts.map(post => (
          //console.log(post.title)
          <li key={post.id}>{post.id}. {post.title}</li>
        ))}
      </ul>
    </div>
  )
}
//서버사이트렌더링 (빈번한 데이터 변화에 대한 페이지적용)
//서버에서 데이터가 변경됬을때 즉각 반영
// export const getServerSideProps = async()=>{
//   const res = await fetch(`http://localhost:8080/api/posts`)
//   const posts = await res.json();

//   return{
//     props:{
//       posts
//     }
//   }
// }

//스태틱사이트제너레이션 
//(서버의 데이터가 변경되도 이미 빌드시에 모든 내용을 작성해놓았기때문에 적용이안된)
//즉 데이터 변경없이 고정된 페이지 볼때 사용
//이럴 때 인크리먼트스택틱리제너레이션 사용

//빌드를 할때마다 페이지가 갱신되기 때문에 빌드 타임,데이터변경에 고려하여사용
export const getStaticProps = async()=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
  const posts = await res.json();

  return{
    props:{
      posts
    },
    //인크리먼트스택틱리제너레이션
    //20초후에 다시 접근하면 변경된 데이터를 가져옴
    revalidate: 20
  }
}
