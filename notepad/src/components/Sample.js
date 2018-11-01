import React,{Component} from 'react';
import {connect} from 'react-redux';
import { add_info } from '../actions/ActionCreator';
class Sample extends Component{
    constructor(props)
    {
        super(props)
       
        this.handleTextarea=this.handleTextarea.bind(this)
    }
    handleTextarea(e)
    {

        console.log("at textarea",e.target.value)
        // this.setState({
        //     data:e.target.value
        // });
        this.props.dispatch(add_info(this.props.params.title,e.target.value))
    }

    render(){
        console.log("store presentr ",this.props.present);
        console.log("at render",this.props.params.title)
        console.log("at edit",this.props.note)
        let style1={float:"right",
                    padding:50}
     
    
        return(
            <div style={style1}>
                <textarea rows="15" cols="50"  name="note" value={this.props.note} onChange={this.handleTextarea}/>
                
            </div>
        );
    }
}
function mapStateToProps(store,newProps)
{
    console.log("at map state to props",store)
    console.log("sdsd",newProps.params.title);
    return{
        note:[store.noteObj].newProps.params.title,
        present:store.noteObj
    }
}
export default connect(mapStateToProps)(Sample);








// import React,{Component} from 'react';
// export default class Sample extends Component{
//     render(){
       
        
//         return(
            
//             <div>
//                 {this.props.children}
//             </div>
//         );
//     }
// }