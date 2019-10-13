import React from "react";
import './components.scss';

class Machine extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data:
            [
                {
                    number: 1,
                    letter: 'Q',
                    sound: 'heater1',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                },
                {
                    number: 2,
                    letter: 'W',
                    sound: 'heater2',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                },
                {
                    number: 3,
                    letter: 'E',
                    sound: 'heater3',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                },
                {
                    number: 4,
                    letter: 'A',
                    sound: 'heater4',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                },
                {
                    number: 5,
                    letter: 'S',
                    sound: 'clap',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                },
                {   
                    number: 6,
                    letter: 'D',
                    sound: 'openHat',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                },
                {
                    number: 7,
                    letter: 'Z',
                    sound: 'kicknHat',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                },
                {
                    number: 8,
                    letter: 'X',
                    sound: 'kick',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                },
                {
                    number: 9,
                    letter: 'C',
                    sound: 'closedHat',
                    source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                }
            ],
            display: 'hellooo'
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleClick(e){
        let sound = document.getElementById(e.target.value)
        sound.play()
        this.setState({display: this.state.data.find(x => x.letter === e.target.value.toUpperCase()).sound})
    }

    handleKeyDown(e){
        if(/Q|W|E|A|S|D|Z|X|C/i.test(e.key)){
            let sound = document.getElementById(e.key.toUpperCase())
            sound.play()
            this.setState({display: this.state.data.find(x => x.letter === e.key.toUpperCase()).sound})
        }
        
    }

    

    render(){
        let pads = []

        for (let item in this.state.data){
            pads.push(
                <div 
                className='drum-pad'  
                value={'test' + item} 
                id={'test' + item} 
                key={'pad' + this.state.data[item].number} 
                >
                        
                    <audio id = {this.state.data[item].letter} >
                        <source src={this.state.data[item].source}/>
                    </audio>
                    
                    <input
                    type='button'
                    onClick = {this.handleClick}
                    value={this.state.data[item].letter}
                    desc={this.state.data[item].sound}
                    className='alert alert-primary'
                    />
                </div>
            )
        }

        let currentDisplay = <div id='display' >{this.state.display}</div>

        return(
            <div id = 'overall-page' onKeyPress = {this.handleKeyDown}> 
                
                <div id='page-title'>DRUMLIFE</div>

                <div className = 'container' >
                    
                    <div id='pad-bank' className='row' id='drum-machine'>
                        
                            {pads}
                        
                    </div>
                </div>
                    <div id='display' className='col-6'>   
                        {currentDisplay}
                    </div>
                
                

                 
            </div>
        );
    }
}

export default Machine