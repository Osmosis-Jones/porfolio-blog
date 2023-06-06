const Home = () => {

    const handleClick =() =>{
        console.log('Hello Human')
    }
    const handleClickAgain = (name) =>{
        console.log('hello'+name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClickAgain}>Click me again</button>
        </div>
     );
}
 
export default Home;