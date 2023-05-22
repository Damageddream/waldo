import '../styles/guessinfo.css'

const GuessInfo = ({guess}) =>{
    return (
        <div>
            {guess? <div className="correct">Correct!</div>: <div className="wrong">Wrong!</div>}
        </div>
    )
}

export default GuessInfo;