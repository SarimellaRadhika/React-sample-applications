import React,{Component} from 'react';
import AddDataHoc from './hoc';
class Whether extends Component{
constructor()
{
    super();
    this.state={
        place:"",
        place_id:"",
        result:{},
        error:null,
        result1:[],
        latitude:"",
        longitude:""
    };
    this.handlePlace=this.handlePlace.bind(this)
    this.handleLocation=this.handleLocation.bind(this)
}
componentWillReceiveProps(newProps)
{
    console.log("at component will receive props")
    if(newProps.flag!==this.props.flag)
    {
        let id=this.state.place
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+id+"&appid=3b32b25588d6e3d0a229c70e81954660")
        .then(res=>res.json())
        .then(
            (result)=>{
            this.setState({
            result:result
            });
            console.log("hellooooooo to chek result.id",result.id)
            fetch("https://api.openweathermap.org/data/2.5/forecast?id="+result.id+"&appid=3b32b25588d6e3d0a229c70e81954660")
            .then(res=>res.json())
            .then(
                (result)=>{
                    console.log("att",result.list)
                this.setState({
                result1:result.list
                });
                },
            )
            },
            (error)=>{
                console.log("error::",error)
                this.setState({
                    error:error
                });
            }
            
        )

       
    }
}
// componentDidMount()
// {
//         let location = null;
//         let latitude = null;
//         let longitude = null;
//         if (window.navigator && window.navigator.geolocation) {
//             location = window.navigator.geolocation
//         }
//         if (location){
//             location.getCurrentPosition(function (position) {
//                 latitude = position.coords.latitude;
//                 longitude= position.coords.longitude;
//                 console.log(latitude);
//                 console.log(longitude);
//             })
//         }
//             this.setState({latitude: latitude, longitude: longitude});
        
        
// }
handleLocation()
{
    let location = null;
        let latitude = null;
        let longitude = null;
        if (window.navigator && window.navigator.geolocation) {
            location = window.navigator.geolocation
        }
        if (location){
            location.getCurrentPosition((position) => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                console.log("h", latitude);
                console.log(longitude);
                fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=3b32b25588d6e3d0a229c70e81954660")
                    .then(res => res.json())
                    .then((result) => {
                        console.log(this)
                        this.setState({
                            result : result
                        })
                    })   
                    
                fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+ "&lon="+longitude+"&appid=3b32b25588d6e3d0a229c70e81954660")
                    .then(res => res.json())
                    .then((result) => {
                        console.log(this)
                        this.setState({
                            result1: result.list
                        })
                    })
            })
        }      
        
    }
handlePlace(e)
{
    console.log("at handleplace",e.target.value)
    console.log(this)
    this.setState({
        place:e.target.value
    }); 
}
    render()
    {
        console.log("at render",this.state)
        let {result,result1}=this.state
        let main=this.state.result.main
        let weather=result.weather
        // const style1={
        //     float:"left",
        //     overflow: "auto"
        // }
        return(

            <div>
                <input type="text" name="city" onChange={(e)=>this.handlePlace(e)}/>
                <br/><br/><br/>
                <button onClick={this.handleLocation}>get report on geolocation</button><br/>
                {
                    result!==undefined&&main!==undefined&&result1!==undefined?
                <div>
                    <h3>Current weather report</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Location</td>&nbsp;&nbsp;&nbsp;<td>Current Weather Description</td>&nbsp;&nbsp;&nbsp;
                            <td>Temperature</td>&nbsp;&nbsp;&nbsp;<td>Pressure</td>&nbsp;&nbsp;&nbsp;
                            <td>Humidity</td>
                        </tr><br/>
                        <tr>
                        <td>{result.name}</td>&nbsp;&nbsp;&nbsp;<td>{weather[0]['description']}</td>&nbsp;&nbsp;&nbsp;
                        <td>{main.temp}</td>&nbsp;&nbsp;&nbsp;<td>{main.pressure}</td>&nbsp;&nbsp;&nbsp;
                        <td>{main.humidity}</td>
                        </tr>
                    </tbody>
                </table> 
                <h3>Weather forecasting for next 5 days</h3>
                 <table>
                    <tbody>
                        {/* <tr>
                            
                            <td>Date</td>&nbsp;&nbsp;&nbsp;<td>Current Weather Description</td>&nbsp;&nbsp;&nbsp;
                            <td>Temperature</td>&nbsp;&nbsp;&nbsp;<td>Pressure</td>&nbsp;&nbsp;&nbsp;
                            <td>Humidity</td>
                        </tr><br/> */}
                       { result1.map((val)=>{
                        return <div name="viewport" content="width=device-width, initial-scale=1"><table border="1">
                        <tr><th>date::</th><td>{val.dt_txt}</td></tr>
                        <tr><th>Description::</th><td>{val.weather[0]['description']}</td></tr>
                        <tr><th>Temperature::</th><td>{val.main.temp}</td></tr>
                        <tr><th>Pressure::</th><td>{val.main.pressure}</td></tr>
                        <tr><th>Humidity::</th><td>{val.main.humidity}</td></tr>
                        </table><br/><br/></div>
                    })}
                             
                    </tbody>
                </table>  
                </div>
                :
                this.state.error
                }
            </div>
        );
    }
}
export default AddDataHoc(Whether);