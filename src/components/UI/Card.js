import cardStyle from './card.module.css'

const CardSec = (props) => {
    return <>
        <section className={`card  m-3 p-2 rounded-5 shadow-lg bg-white text-dark ${cardStyle.bgImg}`}> 
        {props.children}
        </section>
    </>
    }
    
    export default CardSec;