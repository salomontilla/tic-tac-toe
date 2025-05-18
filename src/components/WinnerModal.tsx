import { Square } from './Square'

export function WinnerModal({ winner, resetGame }: { winner: string | ''; resetGame: () => void }) {
    if(winner?.length === 0) return null
    return (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner?.match("tie") ? 'Empate' : 'Ganó: '
                }
              </h2>
              <header className='win'>
                { !winner?.match("tie") && <Square>{winner}</Square> }
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
}