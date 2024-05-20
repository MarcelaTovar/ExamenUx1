import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shorts from '../../atoms/Shorts/Shorts';
import './ShortsCompilation.css'

const ShortsCompilation = () => {
    return (
        <div className="shorts-compilation container-fluid">
            <Shorts link="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg" primer="Flores rosadas" segundo="4 millones de visitas" />
            <Shorts link="https://m.media-amazon.com/images/I/41A04pBbm9S.jpg" primer="ASMR" segundo="2 millones de visitas" />
            <Shorts link="https://www.parnassa.com.ar/product_images/c/333/J-272_2__30249_std.jpg" primer="Slime Restock" segundo="10 millones de visitas" />
            <Shorts link="https://i.pinimg.com/236x/b7/0b/e9/b70be9b9d1de7e681a6e99a6593009cd.jpg" primer="New MUCKBANG" segundo="30 millones de visitas" />

            <Shorts link="https://i.pinimg.com/736x/d9/8b/5e/d98b5e580c1f8f25da1ceefec3fbfc0b.jpg" primer="NARS new palette" segundo="50 millones de visitas" />
            <Shorts link="https://cdn-img.prettylittlething.com/a/a/a/e/aaae815c5944c167477c3b66a1afbadd8911909f_cmy0040_1.jpg" primer="Dress Review" segundo="80 millones de visitas" />
            <Shorts link="https://www.niehs.nih.gov/sites/default/files/research/assets/images/dr2_desk.jpg" primer="Quimica para DUMMIES" segundo="2 millones de visitas" />
            <Shorts link="https://m.media-amazon.com/images/I/813aV273-rL._AC_UF1000,1000_QL80_.jpg" primer="It ends with us review" segundo="120 millones de visitas" />
            {/*<Shorts link="https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/ba6b329829de489195929de49ae60827_1646590094~tplv-photomode-video-cover:480:480.jpeg?x-expires=1716220800&x-signature=YF9XbXDf3Rkwo4IiwaaRSnS1la4%3D" primer="Jugando ROBLOX con FernanFloo" segundo="300 millones de visitas" />
            <Shorts link="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg" primer="Star Wars Episode IV FUll Movie" segundo="23 millones de visitas" />
            <Shorts link="https://media.vogue.es/photos/652e3bd46dab2e568b5bf652/2:3/w_2560%2Cc_limit/1250692973" primer="Taylor Swift teases upcoming album" segundo="50 millones de visitas" />
            <Shorts link="https://www.usatoday.com/gcdn/presto/2023/07/13/PNDN/ffc2fce7-9d2a-42cf-9772-78d265ad0218-image_2.png?crop=373,498,x96,y0" primer="Florida man fights alligator" segundo="3 millones de visitas" />*/}
        </div>
    );
}

export default ShortsCompilation;