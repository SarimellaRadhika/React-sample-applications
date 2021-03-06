import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      search:"",
      flagList:[false,false,false,false,false,false,false,false,false,false,false,false],
      searchList:[],
      
      tagsList:[{"status":1,"entity_id":5024,"display_name":"# SSI Schafer A/S - BU","parent_tag_id":2828,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":4245,"tag_name":"#SSI Schafer A/S-BU","last_modified":null,"created_date":"2018-04-15T11:50:29","tag_type":null},{"status":1,"entity_id":3634,"display_name":"#SSISchaferA/S","parent_tag_id":2828,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":2830,"tag_name":"#SSISchaferA/S","last_modified":"2017-10-17T12:15:06","created_date":"2017-10-17T12:15:06","tag_type":null},{"status":1,"entity_id":2442,"display_name":"#SSLAB-Alpharetta","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1123,"tag_name":"#SSLAB-Alpharetta","last_modified":"2017-07-07T11:55:11","created_date":"2017-07-07T11:55:11","tag_type":null},{"status":1,"entity_id":4122,"display_name":"# SSLAB-Alpharetta - BU","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":3343,"tag_name":"#SSLAB-Alpharetta-BU","last_modified":null,"created_date":"2018-04-15T11:50:07","tag_type":null},{"status":1,"entity_id":2443,"display_name":"#SSLAB-Ellis","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1124,"tag_name":"#SSLAB-Ellis","last_modified":"2017-07-07T11:55:13","created_date":"2017-07-07T11:55:13","tag_type":null},{"status":1,"entity_id":4123,"display_name":"# SSLAB-Ellis - BU","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":3344,"tag_name":"#SSLAB-Ellis-BU","last_modified":null,"created_date":"2018-04-15T11:50:07","tag_type":null},{"status":1,"entity_id":4084,"display_name":"# SSO Test Client - BU","parent_tag_id":2484,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":3305,"tag_name":"#SSO Test Client-BU","last_modified":null,"created_date":"2018-04-15T11:50:06","tag_type":null},{"status":1,"entity_id":2385,"display_name":"#SSOTest","parent_tag_id":2484,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1066,"tag_name":"#SSOTest","last_modified":"2017-07-07T11:51:53","created_date":"2017-07-07T11:51:53","tag_type":null},{"status":1,"entity_id":2385,"display_name":"#SSOTest - Group","parent_tag_id":null,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":2484,"tag_name":"#SSOTest-Group","last_modified":null,"created_date":"2017-09-29T05:33:30","tag_type":"Group"},{"status":1,"entity_id":2392,"display_name":"#SSOTestClient","parent_tag_id":2484,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1073,"tag_name":"#SSOTestClient","last_modified":"2017-07-07T11:52:13","created_date":"2017-07-07T11:52:13","tag_type":null},{"status":1,"entity_id":3074,"display_name":"#SSPData","parent_tag_id":2596,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1755,"tag_name":"#SSPData","last_modified":"2017-07-07T12:54:57","created_date":"2017-07-07T12:54:57","tag_type":null},{"status":1,"entity_id":3074,"display_name":"#SSPData - Group","parent_tag_id":null,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":2596,"tag_name":"#SSPData-Group","last_modified":null,"created_date":"2017-09-29T05:33:30","tag_type":"Group"}]
    };
  }
  handleSearch=(e)=>
  {
    console.log("at method", e.target.value)
    this.setState({
      search:e.target.value
    });
  }
  handleClick=(val,i)=>
  {
    let temp=this.state.searchList
    let temp1=this.state.flagList
    temp1[i]="true"
    temp.push(val)
    this.setState({
      searchList:temp,
      flagList:temp1,
      search:""
    });
  }
  handleDelete=(i)=>
  {
    let temp=this.state.searchList
    temp.splice(i,1)
    let temp1=this.state.flagList
    temp1[i]="false"
    console.log()
    this.setState({
      searchList:temp,
      flagList:temp1
    });
  }

  render() {
    const reg=new RegExp(this.state.search,'i')

   const data= this.state.tagsList.filter((value)=> {return(value.tag_name.match(reg))})
   
 //let searchList=this.state.tagsList.map((val)=>{return val.tag_name})
    return (
      <div>
        <div className="dynamic-content-2" style={{backgroundColor: '#fff', padding: 20}}>
        <div className="slider-main-inviteusers-container">
          <div className="slider-headersection">
            <h1>
              {/* react-text: 5209 */}Tags of Conversation {/* /react-text */}<br />
              <i>
                {/* react-text: 5212 */}“{/* /react-text */}{/* react-text: 5213 */}Widgets{/* /react-text */}{/* react-text: 5214 */}”{/* /react-text */}
              </i>
            </h1>
            <h2>
              {/* react-text: 5216 */}in # {/* /react-text */}{/* react-text: 5217 */}NetEnrich Inc.{/* /react-text */}
            </h2>
          </div>
          <div className="clearfix" />
          <div className="invite-users-searchsection tags">
            <div className="form-group div-control-full-width">
              <div className="tokenfield form-control width-control">
             { this.state.searchList.map((val,i)=>{
                return  <div className="token" id="10conversationTags">
                  <span className="token-label">{val}</span>
                  <a className="close" style={{cursor: 'not-allowed'}} onClick={()=>this.handleDelete(i)}>
                    <svg width="8px" height="8px" viewBox="0 0 10 10" version="1.1">
                      <g id="search2" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="Tab-search2" transform="translate(-979.000000, -19.000000)" fill="#0F96BE">
                          <g id="Field:-search2" transform="translate(771.000000, 8.000000)">
                            <polygon id="Shape" points="218 12 217 11 213 15 209 11 208 12 212 16 208 20 209 21 213 17 217 21 218 20 214 16" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>}
             )}
                {/* <div className="token" id="729conversationTags">
                  <span className="token-label">Started</span>
                  <a className="close" style={{cursor: 'not-allowed'}}>
                    <svg width="8px" height="8px" viewBox="0 0 10 10" version="1.1">
                      <g id="search2" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="Tab-search2" transform="translate(-979.000000, -19.000000)" fill="#0F96BE">
                          <g id="Field:-search2" transform="translate(771.000000, 8.000000)">
                            <polygon id="Shape" points="218 12 217 11 213 15 209 11 208 12 212 16 208 20 209 21 213 17 217 21 218 20 214 16" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>  */}
             
                <input type="text" className="token-input" value={this.state.search} name="_token" autoComplete="off" id="conversation-tags-search-box" placeholder=" " onChange={this.handleSearch}/>
              </div>
              <div className="queuetags-dropdown  queuetags-dropdown-margin-auto" style={{display: 'block'}}>
                <div className="tag-group d-table">
                  <div className="new-scrollbar drp-maxheight">
                    <div className="invite-list">
                   { data.map ((val,i)=>{
                   return <a href="javascript:void(0)">
                      <div className="media" >

                        <div className="media-body" >
                          <p>
                            {/* react-text: 5268 */}{val.tag_name}{/* /react-text */}<br /><small><span>ne-department</span></small>
                          </p>
                        
                        </div>
                        {this.state.flagList[i]!=="true"?
                          <div className="media-right circle" >
                            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" onClick={()=>this.handleClick(val.tag_name,i)} >
                              <g id="Symbols" stroke="none" fill="none">
                                <g id="+_symb" transform="translate(-8.000000, -9.000000)" fill="#000000">
                                  <polygon id="+" points="14.1921387 13.8891602 18.416748 13.8891602 18.416748 15.3041992 14.1921387 15.3041992 14.1921387 19.6723633 12.7668457 19.6723633 12.7668457 15.3041992 8.56274414 15.3041992 8.56274414 13.8891602 12.7668457 13.8891602 12.7668457 9.50048828 14.1921387 9.50048828" fill="green"/>
                                </g>
                              </g>
                            </svg>
                            </div>
                            :
                            <div className="media-right circle" >
                            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" >
                              <g id="Symbols" stroke="none" fill="none">
                                <g id="+_symb" transform="translate(-8.000000, -9.000000)" fill="#000000">
                                  <polygon id="+" points="14.1921387 13.8891602 18.416748 13.8891602 18.416748 15.3041992 14.1921387 15.3041992 14.1921387 19.6723633 12.7668457 19.6723633 12.7668457 15.3041992 8.56274414 15.3041992 8.56274414 13.8891602 12.7668457 13.8891602 12.7668457 9.50048828 14.1921387 9.50048828" fill="red" />
                                </g>
                              </g>
                            </svg>
                          
                        </div>}
                       
                      </div>
                    </a>})}
                      
                      <a id="noRecFound" href="javascript:void(0)" style={{display: 'none'}}>
                        <div className="media">
                          <div className="media-body">
                            <p style={{textAlign: 'center', fontSize: 15}}>
                              {/* react-text: 5247 */}No results found{/* /react-text */}<br />
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
        </div>
    );
  }
}

export default App;
