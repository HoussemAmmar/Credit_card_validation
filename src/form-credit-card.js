import React, {Component} from 'react'



class Credit extends Component {

    constructor(props){
        super (props)

        this.state = {
            RIB : '',
            username : '',
            expirationDate : '' ,
            nameError : '',
            RibStars : '**** **** **** ****',
            DateDefault : 'MM/YY'
        }
    }

   
   
    RIBChange = (e) => {
        
        setInterval(() => (this.setState({RIB: this.state.RIB.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim()})));
        setInterval(() => (this.setState({RIB : this.state.RIB.slice(0,19)})))
        
        
    }
    
    nameChange = (e) => {
        setInterval(() => (this.setState({username : this.state.username.replace(/[^a-z]/gi,' ')})))
        setInterval(() => (this.setState({username : this.state.username.slice(0,22).toUpperCase()})))
        
        
      }  
    
    expirationDateChange = (e) => {
        setInterval(() => (this.setState({expirationDate : this.state.expirationDate.slice(0,5)})),100)
        setInterval(() => (this.setState({expirationDate : this.state.expirationDate.replace(/\D/g, "").replace(/(.{2})/, "$1/").trim(), })),100);
    
    }
    nameHandler = (event) => {
        
        this.setState({
                
            [event.target.name]: event.target.value
        })  

        // message error for username

        if (this.state.username.length < 3 ) {
            this.setState({nameError : "Name is short* "})
          }
        else {
            this.setState({nameError : ""})
        }   
     
    }
    RIBhandler = (event) => {
        
        this.setState({
                
            [event.target.name]: event.target.value
        })  

        // replacing with stars for rib
        let Stars = "********************".split("");
        Stars.unshift(event.target.value);
        for (let i = 0; i < event.target.value.length; i++) {
            Stars.pop();
        }
        
        let RibStars2 = Stars.join("");
       
        this.setState({RibStars : RibStars2})
        
    }
    dateHandler = (event) => {
        
        this.setState({
                
            [event.target.name]: event.target.value
        })  

        //replacing with strings with date
        let DateDefault = "MM/YY*".split("");
        DateDefault.unshift(event.target.value);
        for (let i = 0; i < event.target.value.length+1; i++) {
            DateDefault.pop();
        }
        let DateDefault2 = DateDefault.join("");
       
        
        this.setState({DateDefault : DateDefault2})
    }
        


    render() {
        return(
            <form className ="container col-5">
                <div className = "form ">
                    <label>RIB</label>
                    <input name = "RIB" 
                      type='text' 
                      value ={this.state.RIB} 
                      onChange ={this.RIBhandler} 
                      onFocus ={this.RIBChange}
                      />
                    <p>{this.state.RibError}</p>

                    <label>User Name</label>
                    <input name = "username"
                     type='text' 
                     value ={this.state.username} 
                     onChange ={this.nameHandler}
                     onFocus = {this.nameChange}/>
                     <p style = {{
                         color: "red"
                     }}>{this.state.nameError}</p>

                    <label>Expiration date</label>
                    <input 
                    name = "expirationDate" 
                    type='text' 
                    value ={this.state.expirationDate}
                    onChange ={this.dateHandler}
                    onFocus = {this.expirationDateChange}/>
                </div>
                <div className= "ATM-card ">
                    <p className = "rib">{this.state.RibStars}</p>
                    <div className="name-date">
                        <h6 className="name">{this.state.username}</h6>
                        <p>{this.state.DateDefault}</p>
                    </div>
                </div>
            </form>
        )
    }
}

export default Credit;
