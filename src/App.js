import avatar from './images/augustine.png'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <article className="media">
        <img
          src={avatar}
          className="media__image"
          alt="There is nothing to show"
        />
        <div className="media__body">
          <div className="media__title">Augustine Awuori</div>
          <p className="media__content">
            School of Information Science and Technology
          </p>
        </div>
      </article>
    </div>
  )
}

export default App
