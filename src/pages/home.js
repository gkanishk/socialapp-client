import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from "../components/Scream";
import Icon from '../images/icon.png'
//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
class home extends Component{
    state={
        screams:null
    }
    componentDidMount(){
        axios.get('/screams')
        .then(res=>{
            
            this.setState({
                screams:res.data 
            })
            console.log(this.state.screams)
        }).catch(err=>console.error(err));
    }
    render()
    {
        let recentScreamsMarkup=this.state.screams 
        ? 
        (this.state.screams.map(scream=><Scream key={scream.screamId} scream={scream}/>))
        :
        <Card >
                <CardMedia
                image={Icon}
                title="Profile image" />
                <CardContent >
                    <Typography variant="h5"  color="primary">userHandle</Typography>
                    <Typography variant="body2" color="textSecondary">12</Typography>
                    <Typography variant="body1">body</Typography>

                </CardContent>
            </Card>
        return (
        <Grid container spacing={10}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile...</p>
            </Grid>
        </Grid>
    
        )
    };
}
export default home;