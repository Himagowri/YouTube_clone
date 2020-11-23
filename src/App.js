import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar,VedioDetail,VideoList,Header,Contact} from './components';
import './App.css';
import Sidebar from './Sidebar';
import {Switch,Redicrect,Route, BrowserRouter} from 'react-router-dom';


   
class App extends React.Component{ 
    state= {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.handleSubmit('javascript');
    }

    onVideoSelect = (videos) => {
        this.setState({
            selectedVideo:videos
        });
    }

    handleSubmit= async (searchTerm ) =>{
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key:'AIzaSyBDVPG11uJ-kOwiE0xIPS0R6dB_NCB5TDY',
                q: searchTerm,
            }

        });
        
        //console.log(response);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    }


    render(){
        const {selectedVideo,videos}=this.state;
        return(
        <BrowserRouter>
            <div style={{backgroundColor:'black'}}>
                
                <Header /> 
                <div className="app_css">
                    
                        <Grid classname="videocontent" justify="center" container spacing={5}>
                            <Grid item xs={12}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12}>
                                        <SearchBar onFormSubmit={this.handleSubmit} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <VedioDetail video={selectedVideo}/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    <Switch>
                        
                        <Route path="/contact" component={Contact} ></Route>
                    </Switch>

                </div>
                
            
            </div>
        </BrowserRouter>
            
            
            
        )
    }
}

export default App;