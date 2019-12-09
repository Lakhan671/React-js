import React,{Component}from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox } from '@material-ui/icons'
class Welcome extends Component{
    constructor(){
        super();
        this.state={
          message:'java'
        }
      }
     changeit(){
        this.setState({message:'hibernate'});
        
    }
    render(){
        return (<List component="nav">
        <ListItem component="div" >

            <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                    Home  <Home />
                </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
                <TypoGraphy color="inherit" variant="title" onClick={()=>this.changeit()}>
                    {this.props.name}-{this.state.message}  <Home />
                </TypoGraphy>
            </ListItemText>

            <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                    Posts <Book />
                </TypoGraphy>
            </ListItemText>

            <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                    Contact <AccountBox />
                </TypoGraphy>
            </ListItemText>
        </ListItem >

    </List>)
    }
}
export default Welcome;