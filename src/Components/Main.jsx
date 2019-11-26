import React from 'react';
import MyNav from './MyNav';
import {Container} from 'reactstrap';


class Main extends React.Component {
    state = { 
        searchSite: ""
    }
    render() {
        return (
            <Container className="col-12">
                <MyNav changeSearch={(search) => this.searchSite(search)}></MyNav>
            </Container>
            
        );
    }
}

export default Main;