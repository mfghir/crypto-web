import spinner from "../gif/spinner.gif"

const Loader = () => {
    return ( 
        <section>
            <img src={spinner} alt="loader" />
            <h1>Loading...</h1>
        </section>
     );
}
 
export default Loader;