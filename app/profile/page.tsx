import Navbar from "../components/navbar"
import Header from "../components/header"

export default function Page(){
    const test = <div>hi</div>;
    return(
        <div>
            <Header style={test}/>
            <Navbar />
        </div>
    )
}