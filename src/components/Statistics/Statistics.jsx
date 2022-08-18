import { Div } from './Statistics.styled';

export const Statistics = ({good,neutral,bad, total, positivePercentage}) => {
    return <Div>
      {Object.keys({ good, neutral, bad }).map((key) => (
        <p key={key}>
          {key} : {{ good, neutral, bad }[key]}
        </p>
      ))}
      <div>
        <p>
          Total : <span> {total} </span>
        </p>
        <p>
          PositiveFeedback :
          <span> {positivePercentage} % </span>
        </p>
      </div>
    </Div>;
}