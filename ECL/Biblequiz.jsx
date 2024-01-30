import React from 'react';





function Correct (props){
    const toggle = props.toggle;


    const myStyle = {
        color: "green",
        
      };


    
    
        
        if(toggle){
            return(
                <h3 style={myStyle}>Correct!</h3>
            );
        } else {
            return(
                <h3 ></h3>);
        };
        
}

function Incorrect(props){
    const toggle = props.toggle;


    const myStyle = {
        color: "red",
        
      };


    
    
        
        if(toggle){
            return(
                <h3 style={myStyle}>Incorrect!</h3>
            );
        } else {
            return(
                <h3 ></h3>);
        };
        
} 

function Check(props){
    const isCorrect = props.isCorrect;
    const isToggle = props.toggle
    if(isCorrect){
        return(
            <Correct toggle = {isToggle}/> 
        );
    }
    return(
        <Incorrect  toggle = {isToggle}/>
    );
}



export default function App() {
    return(
        
        <div>
            
            <div>
            
            </div>
            <h1>The Bible Quiz</h1>
            <p >The Bible consist of the Old and New Testaments.</p>
            <Check isCorrect = {true} toggle ={true}/>
            <p >Moses led the Isrealites out of Egypt.</p>
            <Check isCorrect = {true}toggle ={true}/>
            <p>The Sermon on the Mount is found in the Book of Luke.</p>
            <Check isCorrect = {false}toggle ={true}/>



        </div>
    )

    







}


