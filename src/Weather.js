import React from 'react'




class Weather extends React.Component{

    render(){
        return (<>
            <p>{}</p>
            {this.props.resultDataAPI.map(home =><p>date:
                {home.date}  <br/> description:{home.description}   
            
        </p> 
        )}
            </>
        )
    }
}

export default Weather;