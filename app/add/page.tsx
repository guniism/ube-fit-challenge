import Navbar from "../components/navbar"
import Header from "../components/header"
export default function Page(){
    const title = <div>
        <h1 className="text-3xl font-normal text-blue">
            บันทึก
            <br></br>
            การออกกำลังกาย
        </h1>
    </div>;
    return(
        <div>
            <Header style={title} profile={true}/>
            <Navbar />
        </div>
    )
}