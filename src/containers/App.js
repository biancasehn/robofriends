import React, {Component} from "react";
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

//props, never change, they are things that come out of state
//state can change and affect/describes my app

class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfields: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfields: event.target.value })
    }

    render() {
        const { robots, searchfields } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfields.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardsList robots={filteredRobots} />   
                    </Scroll>
                </div>
            );      
        
    }
    
}

export default App;