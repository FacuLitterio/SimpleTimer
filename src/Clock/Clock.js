import React from 'react'
import './Styles.css'

class Clock extends React.Component{
    state = {
        Seconds: 0,
        Minutes: 0,
        Hours: 0
    }

    tick = () => {
        let Seconds = this.state.Seconds    
        let Minutes = this.state.Minutes
        let Hours = this.state.Hours
        
        if(Seconds<60){
            Seconds=Seconds+1
            this.setState({Seconds})
            if(Seconds===60){
                Minutes=Minutes+1
                this.setState({Seconds: 0, Minutes})
            }
            if(Minutes===60){
                Hours=Hours+1
                this.setState({Minutes: 0, Hours})
            }
            
            if(Hours===60){
                this.setState({Seconds: 0, Minutes: 0, Hours: 0})
            }
        }
    }
        
    Iniciar = () => {
       this.ID = setInterval(() => this.tick(), 1000)
    }

    Reiniciar = () => {
        this.setState({
            Seconds: 0,
            Minutes: 0,
            Hours: 0
        })
    }

    Detener = () => {
        clearInterval(this.ID)
    }

    render(){
        let Seconds = this.state.Seconds
        let Minutes = this.state.Minutes
        let Hours = this.state.Hours
        if(Seconds<10){
            Seconds = `:0${Seconds}`
        } else {Seconds = `:${Seconds}`}
        if(Minutes<10){
            Minutes = `:0${Minutes}`
        } else {Minutes = `:${Minutes}`}
        if(Hours<10){
            Hours = `0${Hours}`
        } else {Hours = `${Hours}`}
        
        return(  
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-dark text-light display">
                            {Hours + Minutes + Seconds}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button type="button" className="btn btn-success btn-block btn-lg" onClick={this.Iniciar}>Iniciar</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-danger btn-block btn-lg" onClick={this.Detener}>Detener</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-info btn-block btn-lg" onClick={this.Reiniciar}>Reiniciar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock