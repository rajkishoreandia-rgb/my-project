<!-- Imoprt/Export through module
    export default App(){
            return 'Hi'
    }
    export name = 'Raj';
    export addredd = 'BBSR';

    We can use it anywherre like below|
    import anyName from the path
    import App from './App.jsx';

    To use export variables with out default
    use {} for named export
    import {name,address} from './App.jsx'
    name and address should be same as it is exported from its parent


    //In react everything is function
    in JSX <App/ > same as below
    function App(){
                return <h1>HI</h1>
            }
    React components always return a single element

 -->