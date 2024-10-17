import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../assets/f267e1e8a54f099f09b8688a83ce1fd9.jpg"
import jurusan2 from "./../assets/jahit.jpg"
import jurusan3 from "./../assets/it.jpg"
import kegiatan1 from"./../assets/bola.jpg"
import kegiatan2 from"./../assets/catur.jpg"
import kegiatan3 from"./../assets/pramuka.jpg"  


const Maincontent =()=>{
    return(
        <div>
            <Hero />

            <div className="container">
                <div className="row justifay-content-center">
                    <div className="col-12 text-center my-5">
                        <h1>jurusan sekolah</h1>
                    </div>
                   <div className="col-lg-4 col-12">
                    <Cardjurusan image={jurusan1} jurusan="mekanik"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan2}jurusan="penjahit"/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan3}jurusan="perbaiki pc" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>kegiatan</h1>
                    </div>
                    <div className="col-12">
                       <Cardkegiatan image={kegiatan1}description="lorem" />
                    </div>
                    <div className="col-12">
                       <Cardkegiatan image={kegiatan2}description="lorem" />
                    </div>
                    <div className="col-12">
                       <Cardkegiatan image={kegiatan3}description="lorem" />
                    </div>
                </div>
                
           </div>
     </div>
       
    )
}

export default Maincontent;