import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from "../components/Scream";
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
        (this.state.screams.map(scream=><Scream scream={scream}/>))
        :
        <p>Loading...</p>
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