
import style from './Quiz.module.css'

export default function QuizResult() {
  return (
    <div className={style.scoreSection}>
      <h2>completed! </h2>
      <h4>total score</h4>
      <h4>correct question</h4>
      <button>play again</button>
    </div>
  )
}
