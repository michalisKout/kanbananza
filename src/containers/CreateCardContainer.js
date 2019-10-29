import {connect} from 'react-redux'
import CreateCard from '../components/CreateCard';
import { onCreateCard } from '../actions/card-actions';


const mapDispatchToProps = {
        onCreateCard    
}


export default connect(null, mapDispatchToProps)(CreateCard);