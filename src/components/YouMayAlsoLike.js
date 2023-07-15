import React, { Component } from "react";
import Slider from "react-slick";
import { store } from "../productsStore/Store";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import axios from "../axios";


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
            axios.get(`/products/?ordering=-rating&page_size=8`)
                .then(response => response.data)
                .then(data => {
                    this.setState(prevState => prevState.items = data.results);
                    resolve();
            }).catch(() => reject())
        })
    }

    render() {
        return (
            <div className="youMay">
                <Marquee pauseOnHover={true} speed={100} >
                    {this.state?.items?.map((item) => {
                        return (<div key={item.id}>
                            <Link to={`/${item.id}`}>
                                <img src={item.image} className=" w-48 spCaroImg brForMobile rounded-xl pl-4 pr-4  mb-8" />
                            </Link>
                        </div>)
                    })}
                </Marquee>

            </div>
        );
    }
}



