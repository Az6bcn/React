import './SeasonDisplay.css';
import React from 'react';

const SeasonDisplay = (props) =>{
    console.log('props', props);

    const season = getSeason(props.lat, new Date().getMonth());
    console.log('season', season);
    const {text, iconName} = getTextAndIconBasedOnSeason(season);
    console.log({text, iconName});

    return(
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>
    );
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const getTextAndIconBasedOnSeason = (season) => {
    return season === 'winter' ? {text: 'Burr, it is chilly', iconName: 'snowlake'} : {text: 'Lets hit the beach', iconName: 'sun'};
}

export default SeasonDisplay;