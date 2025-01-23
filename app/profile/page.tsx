import Navbar from "../components/navbar"
import Header from "../components/header"
import { useSession } from "next-auth/react";
export default function Page(){
    const test = <div>hi</div>;
    const {data: session} = useSession();
    console.log(session)
    return(
        <div>
            <Header style={test}/>
            <Navbar />
        </div>
    )
}