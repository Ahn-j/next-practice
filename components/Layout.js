import Nav from "./Nav"

  const Layout = ({children}) => {
    return(
        <>
            
            <Nav/>
            <div>
                {/* children으로 index.js,photos.js
                가 포함되어있음 */}
                {children}
            </div>
        </>
    )
  }

  export default Layout