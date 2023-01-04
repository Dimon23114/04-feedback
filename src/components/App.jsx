import { useState } from "react";
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Section } from '../components/Section/Section';




export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad
    return total;
  };

  const handleClick = e => {
    switch (e) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

        default: return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    
    const total = countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  return (
    <Section title="Please leave feedback">
    <FeedbackOptions
      onLeaveFeedback={handleClick}
      options={[`good`, `neutral`, `bad`]}
    />

    {countTotalFeedback() === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    )}
  </Section>
  )
}




// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };


//   handleClick = e => {
//     this.setState(prevState => {
//       return {
//         [e]: prevState[e] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();

//     return Math.round((good / total) * 100);
//   };

//   render() {
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           onLeaveFeedback={this.handleClick}
//           options={[...Object.keys(this.state)]}
//         />

//         {this.countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     );
//   }
// }