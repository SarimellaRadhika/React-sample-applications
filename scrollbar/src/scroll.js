import React,{Component} from 'react';
import ReactScrollbar from 'react-scrollbar';
class ScrollComp extends Component{
   
    render() {
        // const myScrollbar = {
        //   width: 400,
        //   height: 400,
        // };
        return(
            <div>
                hello
          <ReactScrollbar>
            <div className="should-have-a-children scroll-me">
              <p>And Now </p>
              <p>You Can Put</p>
              <p>A Long Content Here</p>
            </div>
          </ReactScrollbar>
          </div>
        )
      }
}
export default ScrollComp;