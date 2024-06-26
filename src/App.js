import React from "react";
import axios from 'axios';
import  './App.css';
// import PaymentComponent from "./IPComponent";
class App extends React.Component {
    state = { advice: ''}

    componentDidMount(){
        this.fetchAdvice();
    }
    
    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const { advice } = response.data.slip
            this.setState({ advice });
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    render(){
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={()=>{this.fetchAdvice()}}>
                        <span>
                            GIVE ME ADVICE!
                        </span>
                    </button>
                    {/* <PaymentComponent/> */}
                </div>
            </div>
        )
    }
}

export default App