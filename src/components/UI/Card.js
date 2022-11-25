const CardSec = (props) => {
    return <>
        <section className="card  m-5 p-5 rounded-5 shadow-lg bg-white text-dark"> 
        {props.children}
        </section>
    </>
    }
    
    export default CardSec;