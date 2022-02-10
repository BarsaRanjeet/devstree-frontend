import { Component } from "react";
import axios from 'axios';

export default class Testimonial extends Component {
    constructor() {
        super();
        this.state = {
            testimonial: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/testimonial`)
            .then(res => {
                const testimonial = res.data;
                this.setState({ testimonial });
            })
    }

    render() {
        return (
            <>
                <section id="testimonial" className="testimonial">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 pb-20">
                                <h3>Testimonial</h3>
                            </div>
                            <div className="row">
                                {
                                    (this.state.testimonial.length > 0) ?

                                        this.state.testimonial
                                            .map(data =>
                                                <div className="col-md-6 col-lg-4 pb-20">
                                                    <div class="listartikel">
                                                        <div class="col-md">
                                                            <div style={{ width: '100%' }}>{(data.photo) ? <img src={data.photo} /> : ''}</div>
                                                            <div style={{ fontSize: '16px', lineHeight: '25px', color: '#323947', fontWeight: 200 }}>{(data.created_on) ? new Date(data.created_on).toDateString() : ''}</div>
                                                            <div style={{ fontWeight: 500, fontSize: '20px', lineHeight: '34px', letterSpacing: '0px', color: '#121212', marginBottom: '16px' }}>{(data.post ? data.post : '')}</div>
                                                            <div style={{ fontSize: '15px', lineHeight: '25px', color: '#323947', fontWeight: 200 }}>{(!!data.description) ? data.description : ''}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        :

                                        <div className="col-md-6 col-lg-4 pb-20">
                                            <div class="listartikel">
                                                <div class="col-md">
                                                    <div style={{ width: '100%' }}><img src="https://www.dwinawan.com/blog/thumb_article22.jpg" /></div>
                                                    <div style={{ fontSize: '16px', lineHeight: '25px', color: '#323947', fontWeight: 200 }}>{new Date().toDateString()}</div>
                                                    <div style={{ fontWeight: 500, fontSize: '20px', lineHeight: '34px', letterSpacing: '0px', color: '#121212', marginBottom: '16px' }}>Sample format if api is not working...</div>
                                                    <div style={{ fontSize: '15px', lineHeight: '25px', color: '#323947', fontWeight: 200 }}>This his is onnly a format if api is not called onnce api is called it replaced by api data.</div>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}