import React from 'react';
import dotnetcore3 from "../../../src/images/dotnetcore3.jpg";
import nodejs from "../../../src/images/node-js.png";
import react from "../../../src/images/react-1.png";

export interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (<main>
        <section className="section-about">
            <div className="u-center-text">
                <h2 className="heading-secondary u-margin-bottom-big">
                    I have a very Interesting Bio!!
            </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You will fall in love with technology</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus eaque non. Quis fugiat fuga nemo corporis rem eligendi beatae, eius aliquid ab vero magni voluptatibus, impedit commodi mollitia reprehenderit!
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">You will fall in love with technology</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus eaque non. Quis fugiat fuga nemo corporis rem eligendi beatae, eius aliquid ab vero magni voluptatibus, impedit commodi mollitia reprehenderit!
                    </p>
                    <a href="#top" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={nodejs} alt="Node Js" className="composition__photo composition__photo--p1"/>
                        <img src={react} alt="React" className="composition__photo composition__photo--p2"/>
                        <img src={dotnetcore3} alt="Dot Net Core" className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>

        </section>
    </main>);
}

export default Main;