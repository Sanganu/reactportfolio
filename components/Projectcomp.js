import Projectdetail from "./Projectdetail";

class Projectcomp extends React.Component{
    state = {
        project: [
            {
                id:"1",
                title:"skdlf",
                url:"https://www.youtube.com/watch?v=IkOVe40Sy0U&t=1094s"
            },
            {
                id:"2",
                title:"test",
                url:"https://api.nasa.gov/index.html"
            }
        ]
    }
    render(){
        return(
        <div>
            {this.state.project.map((rec,i) => (
                <Projectdetail 
                  data = {rec}
                  key={i} />
            ))}
            </div>
        )
    }
}

export default Projectcomp;