import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MUIList from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withStyles} from '@material-ui/core/styles';
import ListItem from './ListItem';
import MUIListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
    list: {
        maxWidth: 600,
        margin: '0 auto'
    }
};
const List = ({onCheckItem, list, checkedItems, checked,classes}) => {
    //hook to render list only when panel actually expanded
    const [expanded, setExpanded] = useState(false);
    return (
        <ExpansionPanel className={classes.list} onClick={() => setExpanded(true)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                {/* <Typography>{list.title}</Typography> */}
    {/* Make checkbox */}
                <MUIListItem>
                <FormControlLabel control={
                        <Checkbox  checked={list.checked} value={list.title} onChange={(e)=>onCheckItem('make',list.title,[],e)}/>
                        } label={list.title}/>
                        
        </MUIListItem>
        <hr></hr>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {expanded &&
                <MUIList>
                    {list.items.map(item =>
                        <ListItem
                            checked={item.checked}
                            onCheckItem={(e)=>onCheckItem('model',list.title,item,e)}
                            key={item.id}
                            item={item}/>
                    )}
                </MUIList>}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};


List.propTypes = {
    list: PropTypes.object.isRequired,
    checkedItems: PropTypes.object,
    onCheckItem: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(List);
