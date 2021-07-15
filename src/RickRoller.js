import React, { Component } from 'react';
// import ReactPlayer from 'react-player/youtube';

export default class RickRoller extends Component {
    constructor(props) {
        super(props);
        this.rickrollItsFunnyHahahaTimeConsumingOil = this.rickrollItsFunnyHahahaTimeConsumingOil.bind(this);
    }
    rickrollItsFunnyHahahaTimeConsumingOil(e) {
        // this.rickRollActive = true;
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        
    }

    render() {
        let rickRollActive = false;
        return (
            <div>
                {/* {rickRollActive ? <h1 onCopy={this.rickrollItsFunnyHahahaTimeConsumingOil}>dont copy me, dont do it</h1> : } */}
                <h1 onCopy={this.rickrollItsFunnyHahahaTimeConsumingOil}>dont copy me, dont do it</h1>
            </div>
        )
    }
}
