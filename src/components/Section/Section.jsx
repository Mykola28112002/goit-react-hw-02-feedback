import { Wrapper } from './Section.styled';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export const Section = ({buttons,state,good}) => {
    return <Wrapper>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        buttons={buttons}
        good={good}
      />
      <Statistics
        state={state}
      />
  </Wrapper>;
}