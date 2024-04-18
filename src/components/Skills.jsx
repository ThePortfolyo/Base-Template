import React from 'react';

import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    return (
        <>
            <div>
                <div className="md:px-24 pl-3 md:py-16 py-4 px-4">
                    <h1 className=" text-xl font-medium font-mono">Skills</h1>
                    <div className="md:grid-cols-3 grid grid-cols-1 gap-6 pt-4">
                        {skillsData
                            ? skillsData.map((ele) => {
                                  return (
                                      <div className="w-96 h-36 p-4 rounded-md ring-1 ring-zinc-600 space-y-2 hover:cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-0 hover:scale-110  duration-300">
                                          <img src={ele.image.url} className="h-10 w-fit" />
                                          <h1 className="text-xl font-mono ">{ele.name}</h1>
                                          <Box sx={{ width: '10' }}>
                                              <LinearProgressWithLabel value={ele.percentage} />
                                          </Box>
                                      </div>
                                  );
                              })
                            : null}
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
