import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import node from '../assets/node.png';
import next from '../assets/next.png';
import react from '../assets/react.png';
import c from '../assets/c.png';
import ts from '../assets/ts.svg';
import css from '../assets/css.png';
import dom from '../assets/dom.png';
import html from '../assets/html.png';
import native from '../assets/native.png';
import tailwind from '../assets/taileind.png';
import redux from '../assets/redux.png';
import javas from '../assets/javas.png';
import mongodb from '../assets/mongodb.jpg';
import flutter from '../assets/flutter.jpg';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 2 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="zinc">{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};
function Skills(user) {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const skillsData = user?.user?.skills;
    const SkillsComp = ({ image, value, name }) => {
        return (
            <>
                <div className="    w-full h-36 p-4 rounded-md ring-1 ring-zinc-600 space-y-2 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-105  duration-300">
                    <img src={image} className="h-14 w-14 bg-transparent rounded-full" />
                    <h1 className="text-xl font-mono ">{name}</h1>
                    <Box sx={{ width: '10' }}>
                        <LinearProgressWithLabel value={value} />
                    </Box>
                </div>
            </>
        );
    };
    return (
        <>
            <div>
                <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                    <h1 className=" text-xl font-medium font-mono">Skills</h1>
                    <div className="md:grid-cols-3 grid grid-cols-1 gap-10 place-items-center pt-10">
                        <SkillsComp image={react} name="React" value="80" />
                        <SkillsComp image={next} name="Next" value="50" />
                        <SkillsComp image={native} name="React-Native" value="70" />
                        <SkillsComp image={flutter} name="Flutter" value="50" />
                        <SkillsComp image={dom} name="React-Router-Dom" value="70" />
                        <SkillsComp image={redux} name="Redux-Toolkit" value="80" />
                        <SkillsComp image={tailwind} name="Tailwind Css" value="80" />
                        <SkillsComp image={mongodb} name="MongoDb" value="75" />
                        <SkillsComp image={node} name="Node" value="60" />
                        <SkillsComp image={javas} name="JavaScript" value="80" />
                        <SkillsComp image={ts} name="TypeScript" value="65" />
                        <SkillsComp image={c} name="C" value="80" />
                        <SkillsComp image={css} name="Ccc" value="85" />
                        <SkillsComp image={html} name="Html" value="80" />
                    </div>
                </div>
                <div className="md:px-24 px-4">
                    <p className="ring-1 ring-zinc-400 "></p>
                </div>
            </div>
        </>
    );
}

export default Skills;
