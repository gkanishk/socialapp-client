import React,{Fragment} from 'react';
import Imge from '../images/image.png';
import PropTypes from 'prop-types';
//MUI
import Cardd from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import withStyles from '@material-ui/core/styles/withStyles';

const styles=(themes)=>({
    // ...themes,
    card:{
        display:'flex',
        marginBottom:20,

    },
    cardContent:{
        width:'100%',
        flexDirection:'column',
        padding:25
    },
    cover:{
        minWidth:200,
        objectFit:'cover'
    },
    handle:{
        width:60,
        height:16,
        backgroundColor:themes.palette.primary.main,
        marginBottom:10
    },
    date:{
        height:14,
        width:100,
        marginBottom:8,
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    fullLine:{
        height:15,
        width:'90%',
        marginBottom:8,
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    halfLine:{
        height:15,
        width:'50%',
        marginBottom:8,
        backgroundColor:'rgba(0,0,0,0.6)'
    },

})

const ScreamSkeleton=(props)=>{
    const {classes}=props;

    const content = Array.from({length:4}).map((item,index)=>(
        <Cardd className={classes.card} key={index}>
            <CardMedia className={classes.cover} image={Imge}/>
            <CardContent className={classes.cardContent}>
                <div className={classes.handle}/>
                <div className={classes.date}/>
                <div className={classes.fullLine}/>
                <div className={classes.fullLine}/>
                <div className={classes.halfLine}/>
            </CardContent>
        </Cardd>
    ))
    return <Fragment>
        {content}
    </Fragment>
}

ScreamSkeleton.propTypes={
    classes:PropTypes.object.isRequired 
}

export default withStyles(styles)(ScreamSkeleton);