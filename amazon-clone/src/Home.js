import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                src="https://m.media-amazon.com/images/I/61YsvjuAKIL._SX1500_.jpg"
                 alt=" "/>

                <div className="home_row">
                <Product id="10000" title='Curved Monitor Samsung' price={49.99} image='https://images.samsung.com/is/image/samsung/p6pim/in/lf24t352fhwxxl/gallery/in-t35f-379163-lf24t352fhwxxl-401505312?$720_576_PNG$' rating={3}/>
                <Product  id="10001" title='The Lean Startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={4}/>
                
                
                </div>

                <div className="home_row">
                <Product id="10002" title='Amazon Echo' price={29.99} image='http://assets.stickpng.com/images/5871218438315b0eebc1da27.png' rating={3}/>
                <Product id="10003" title='Ipad Pro' price={199} image='https://imagineonline.store/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmRuIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f49bafe75600e1a0c9fa108f14f0761572fb4666/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lQTVRBd01IZ3hNREF3UGdZNkJrVlUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--3847b42f42b1c45c616f0212496bf183b1d8c25d/MHNK3HN_A_1.png' rating={4}/>
                <Product id="10004" title='I phone ' price={699.99} image='https://www.pngall.com/wp-content/uploads/5/iPhone-11-PNG-Transparent-HD-Photo.png' rating={2}/>
                
                
                </div>

                <div className="home_row">
                <Product id="10005" title='Curved Monitor Samsung' price={49.99} image='http://freebiescloud.com/wp-content/uploads/2020/10/1-111.png' rating={5}/>
                
                
                </div>





            </div>
        </div>
    )
}

export default Home
