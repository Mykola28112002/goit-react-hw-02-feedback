import { Div } from './Statistics.styled';

export const Statistics = ({options, total, positivePercentage}) => {
    return <Div>
        {Object.keys(options).map(key => (
        <p key={key}>
          {key} : {options[key]}
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