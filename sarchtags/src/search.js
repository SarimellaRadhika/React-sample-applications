import React,{ Component } from "react";
class Search extends Component{
    constructor()
    {
        super()
        this.state={
            tagList:[{"status":1,"entity_id":5024,"display_name":"# SSI Schafer A/S - BU","parent_tag_id":2828,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":4245,"tag_name":"#SSI Schafer A/S-BU","last_modified":null,"created_date":"2018-04-15T11:50:29","tag_type":null},{"status":1,"entity_id":3634,"display_name":"#SSISchaferA/S","parent_tag_id":2828,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":2830,"tag_name":"#SSISchaferA/S","last_modified":"2017-10-17T12:15:06","created_date":"2017-10-17T12:15:06","tag_type":null},{"status":1,"entity_id":2442,"display_name":"#SSLAB-Alpharetta","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1123,"tag_name":"#SSLAB-Alpharetta","last_modified":"2017-07-07T11:55:11","created_date":"2017-07-07T11:55:11","tag_type":null},{"status":1,"entity_id":4122,"display_name":"# SSLAB-Alpharetta - BU","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":3343,"tag_name":"#SSLAB-Alpharetta-BU","last_modified":null,"created_date":"2018-04-15T11:50:07","tag_type":null},{"status":1,"entity_id":2443,"display_name":"#SSLAB-Ellis","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1124,"tag_name":"#SSLAB-Ellis","last_modified":"2017-07-07T11:55:13","created_date":"2017-07-07T11:55:13","tag_type":null},{"status":1,"entity_id":4123,"display_name":"# SSLAB-Ellis - BU","parent_tag_id":2496,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":3344,"tag_name":"#SSLAB-Ellis-BU","last_modified":null,"created_date":"2018-04-15T11:50:07","tag_type":null},{"status":1,"entity_id":4084,"display_name":"# SSO Test Client - BU","parent_tag_id":2484,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":3305,"tag_name":"#SSO Test Client-BU","last_modified":null,"created_date":"2018-04-15T11:50:06","tag_type":null},{"status":1,"entity_id":2385,"display_name":"#SSOTest","parent_tag_id":2484,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1066,"tag_name":"#SSOTest","last_modified":"2017-07-07T11:51:53","created_date":"2017-07-07T11:51:53","tag_type":null},{"status":1,"entity_id":2385,"display_name":"#SSOTest - Group","parent_tag_id":null,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":2484,"tag_name":"#SSOTest-Group","last_modified":null,"created_date":"2017-09-29T05:33:30","tag_type":"Group"},{"status":1,"entity_id":2392,"display_name":"#SSOTestClient","parent_tag_id":2484,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1073,"tag_name":"#SSOTestClient","last_modified":"2017-07-07T11:52:13","created_date":"2017-07-07T11:52:13","tag_type":null},{"status":1,"entity_id":3074,"display_name":"#SSPData","parent_tag_id":2596,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":1755,"tag_name":"#SSPData","last_modified":"2017-07-07T12:54:57","created_date":"2017-07-07T12:54:57","tag_type":null},{"status":1,"entity_id":3074,"display_name":"#SSPData - Group","parent_tag_id":null,"entity_type":"channel","tag_status":1,"org_id":251,"tag_id":2596,"tag_name":"#SSPData-Group","last_modified":null,"created_date":"2017-09-29T05:33:30","tag_type":"Group"}],
            search:""
        };
    }
    handleSearch=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render()
    {
        const data=this.state.tagList,
       
        
        return(
            <div>
            <input type="text" name="search" onChange={this.handleSearch}/><br/>
            <ul>
           { data.map((val)=>{return <li> {val.tag_name}</li>})}
           </ul>
            </div>
        );
    }
}
export default Search;