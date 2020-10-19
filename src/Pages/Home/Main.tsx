import React from 'react'


export interface MainProps {

}

const Main: React.FC<MainProps> = () => {
    return (<main>
        <section className="section-about">
            <div className="u-center-text">
                <h2 className="heading-secondary u-margin-bottom-8">
                    I have a very Interesting Bio!!
            </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary">You will fall in love with technology</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus eaque non. Quis fugiat fuga nemo corporis rem eligendi beatae, eius aliquid ab vero magni voluptatibus, impedit commodi mollitia reprehenderit!
                    </p>
                </div>
                <div className="col-1-of-2">
                    Image Composition
                </div>
            </div>

        </section>
    </main>);
}

export default Main;