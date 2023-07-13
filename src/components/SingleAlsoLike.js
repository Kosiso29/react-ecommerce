import React, { Component } from "react";
import Slider from "react-slick";
import { store } from "../productsStore/Store";
import { Link } from "react-router-dom";
export default class AutoPlayMethods extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.state = {
            items: []
        }
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    
    async componentDidMount() {
        await new Promise((resolve, reject) => {
            fetch(`http://solarsales.pythonanywhere.com/products/?ordering=-rating&page_size=8`)
                .then(response => response.json())
                .then(data => {
                    this.setState(prevState => prevState.items = data.results);
                    resolve();
            }).catch(() => reject())
        })
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return (
            <div className="singleMainParentSlider">
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    {this.state?.items?.map((item) => {
                        return (
                            <Link to={`/${item.id}`} key={item.id}>
                                <div key={item.id}>
                                    <img src={item.image} className=" rounded-md w-48 spCaroImg" />
                                </div>
                            </Link>

                        )
                    })}
                </Slider>

            </div>
        );
    }
}
