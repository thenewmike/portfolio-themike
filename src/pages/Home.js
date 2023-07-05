import Header from "./../components/header/Header";

const Home = () => {
    return (<><Header />

        <main className="section">
            <div class="container">

                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">Frontend</h2>
                        <p>JavaScript, ReactJS, HTML, CSS, NPM</p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Backend</h2>
                        <p>NodeJS</p>
                    </li>
                </ul>

            </div>
        </main></>

    );
}

export default Home;