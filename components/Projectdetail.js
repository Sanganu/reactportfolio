import Link from "next/Link";
const Projectdetail = (props) => {
    return(<div>
     "Props check" : {props.data.id}
     "title" :{props.data.title}
     "url"{props.data.url}
     <Link href={props.data.url}>DEployment</Link>
   </div> )
}
  


export default Projectdetail;
