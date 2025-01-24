import Navbar from "../components/navbar"
import Header from "../components/header"
export default function Page(){
    const title = <div>
    <h1 className="text-3xl font-normal text-blue lg:text-xl">จัดอันดับ</h1>
</div>;
    return(
    <div>
      <Header style={title} profile={true}/>
      <Navbar />
      <div className="flex flex-row">
        <div className="w-[320px] hidden lg:block"></div>
        <div className="w-full py-32">
          <h1 className="text-4xl text-center">Coming soon!</h1>
          
        </div>
      </div>
    </div>
    )
}