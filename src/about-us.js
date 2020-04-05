import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class AboutUsPage extends React.Component {
	render() {
		const { AboutUsPage } = this.props;
		return (
			<div>
               <div id="myCarousel" className="carousel slide" data-ride="carousel" >
				<Carousel>
                <div>
                    <img src= 'https://cdn.cosmicjs.com/77b3c3c0-52ca-11e6-a069-734be6eb1ef6-shutterstock_218199787.png'  />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src= 'https://cdn.cosmicjs.com/85707fc0-52cb-11e6-a069-734be6eb1ef6-shutterstock_59961622.png'  />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img  src="https://cdn.cosmicjs.com/79e210f0-51c3-11e6-9e30-fb7e1b19bdc0-image1.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel> 
            </div>
            <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 text-center" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <p className="h1">Medicenter Cares for You</p>
                <p className="h4">We offer services for any patient that needs to get well</p>
            </div>
        </div>
        <div className="row" style={{ marginTop: '30px' }}>
            <div className="col-sm-12 text-center" style={{ marginTop: '50px' }}>
                <p className="h1">Talk to a Medicenter Specialist</p>
                <p className="h4">Let’s Get Started!</p>
                <br />
                {/* <Link href="/contact" ><a className="btn btn-default">{home.call_to_action_button_text.value}</a></Link> */}
            </div>
        </div>
        </div>
            </div>
      
		);
	}
}

export default AboutUsPage;
