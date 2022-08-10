import { Div } from './Statistics.styled';

export const Statistics = ({state: {good,neutral,bad}}) => {
    return <Div>
        <p>Good: 
            <span> {good}</span>
        </p>
        <p>Neutral:
            <span> {neutral}</span>
        </p>
        <p>Bad:
            <span> {bad}</span>
        </p>
        <p>Total:
            <span> 7</span>
        </p>
        <p>Positive feedback:
            <span> 24%</span>
        </p>
    </Div>;
}