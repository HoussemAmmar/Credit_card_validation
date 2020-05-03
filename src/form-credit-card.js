import React, {Component} from 'react'



class Credit extends Component {

    constructor(props){
        super (props)

        this.state = {
            RIB : '',
            username : '',
            expirationDate : '' ,
            nameError : '',
        }
    }

    handlerChange = (event) => {
        
        this.setState({
                
            [event.target.name]: event.target.value
        })  

        if (this.state.username.length < 3 ) {
            this.setState({nameError : "name is short "})
          }
        else {
            this.setState({nameError : ""})
        }   
           
    }
   
    RIBChange = (e) => {
        setInterval(() => (this.setState({RIB : this.state.RIB.slice(0,19)})))
        setInterval(() => (this.setState({RIB: this.state.RIB.replace(/\D/g, "").replace(/(.{4})/g, "$1 ")})));
        
    }
    
    nameChange = (e) => {
        setInterval(() => (this.setState({username : this.state.username.replace(/[^a-z]/gi,' ')})))
        setInterval(() => (this.setState({username : this.state.username.slice(0,22).toUpperCase().trim()})))
        
        
      }  
    
    expirationDateChange = (e) => {
        setInterval(() => (this.setState({expirationDate : this.state.expirationDate.slice(0,5)})))
        setInterval(() => (this.setState({expirationDate : this.state.expirationDate.replace(/\D/g, "").replace(/(.{2})/, "$1/").trim(), })));
    
    }
        


    render() {
        return(
            <form className ="container col-5">
                <div className = "form ">
                    <label>RIB</label>
                    <input name = "RIB" 
                      type='text' 
                      value ={this.state.RIB} 
                      onChange ={this.handlerChange} 
                      onFocus={this.RIBChange}/>
                    <p>{this.state.RibError}</p>

                    <label>User Name</label>
                    <input name = "username"
                     type='text' 
                     value ={this.state.username} 
                     onChange ={this.handlerChange}
                     onFocus = {this.nameChange}/>
                     <p style = {{
                         color: "red"
                     }}>{this.state.nameError}</p>

                    <label>Expiration date</label>
                    <input 
                    name = "expirationDate" 
                    type='text' 
                    value ={this.state.expirationDate}
                    onChange ={this.handlerChange}
                    onFocus = {this.expirationDateChange}/>
                </div>
                <div className= "ATM-card ">
                    <p className = "rib">{this.state.RIB}</p>
                    <div className="name-date">
                        <h6 className="name">{this.state.username}</h6>
                        <p>{this.state.expirationDate}</p>
                    </div>
                </div>
            </form>
        )
    }
}

export default Credit;
