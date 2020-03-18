// import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Projectcomp from "../components/Projectcomp"
const index = (props) => (
    <Layout>
    <div>
    
        <h1>Welcome to Next.js</h1>
         {/* {props} */}
         <Projectcomp  passval="value1" passvalue = "value2"/>
    </div>
    </Layout>
)
// Index.getInitialProps = async function(){
//     const results = await fetch ('https://randomuser.me/api/?results=200&nat=us');
//     const data = await results.json();
//     console.log(data)
//     return(data)
// }
export default index;
