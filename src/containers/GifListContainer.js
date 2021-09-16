import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: [],
    }

    fetchGIFs = (query = "dolphins") => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphins&api_key=lSJAXiSXAmprNqOi2rJlSqNgM71z82X8&rating=g")
         .then((res) => res.json())
         .then(({data}) => {
             this.setState({
                gifs: data.map(gif => ({url: gif.images.original.url}))
            })
        })
    }

    componentDidMount() {
        this.fetchGIFs()
    }

    render() {
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

}

export default GifListContainer;