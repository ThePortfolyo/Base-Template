import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';

import HomeBody from '../components/HomeBody';
function Home() {
    return (
        <div>
            <HomeBody />
            <About />
            <Timeline />
            <Services />
            <Projects />
            <Skills />

            {/* <Testimonial  /> */}
        </div>
    );
}

export default Home;
