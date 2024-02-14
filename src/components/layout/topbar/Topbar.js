import React from 'react';
import classes from './topbar.module.scss'
import PlaceIcon from '@mui/icons-material/Place';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';

const Topbar = () => {
    return (
        <div className={classes.topbar}>
            <div className={classes.topInfoPanel}>
                <div className={classes.logo}>
                    YPI
                    <div className={classes.logoTeg}>
                        #YourPetsSuperHero
                    </div>
                </div>
                <div className={classes.rightInfo}>
                    <img src={require('../../../media/superCat.png')} className={classes.catImg}/>
                    <div className={classes.mapRoute}>
                        Где сдать кровь?
                        <PlaceIcon/>
                    </div>
                    <div className={classes.photo}>
                        <LocalSeeOutlinedIcon/>
                    </div>
                </div>
            </div>
            <div className={classes.bottomInfoPanel}>
                <div className={classes.currentRouteInfo}>
                    Профиль питомца
                </div>
            </div>
        </div>
    );
};

export default Topbar;