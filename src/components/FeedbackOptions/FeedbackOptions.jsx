// import PropTypes from 'prop-types';
import {Feedback, List, Button} from './FeedbackOptionsStyled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>  {
  return <Feedback>
    {options.map((option, index) => {
      return (
        <List key={index}>
          
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </List>
      );
    })}
  </Feedback>
};


// FeedbackOptions.propTypes = {
//     onLeaveFeedback: PropTypes.func.isRequired,
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
// }