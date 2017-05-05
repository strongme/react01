/**
 * Created by Walter on 2017/5/4.
 *
 * When you want to aggregate data from multiple children or to have two child components communicate with each other,
 * move the state upwards so that it lives in the parent component.
 * The parent can then pass the state back down to the children via props,
 * so that the child components are always in sync with each other and with the parent.
 *
 * Keys:
 * Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of "Game".
 * Component keys don't need to be globally unique, only unique relative to the immediate siblings.
 *
 * https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75
 * `const` means that the identifier can’t be reassigned.
 * (Not to be confused with immutable values.
 * Unlike true immutable datatypes such as those produced by Immutable.js and Mori,
 * a `const` object can have properties mutated.)
 *
 * `const` is a signal that the identifier won’t be reassigned.
 *
 * `let`, is a signal that the variable may be reassigned, such as a counter in a loop,
 * or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in,
 * which is not always the entire containing function.
 *
 * `var` is now the weakest signal available when you define a variable in JavaScript.
 * The variable may or may not be reassigned, and the variable may or may not be used for an entire function,
 * or just for the purpose of a block or loop.
 *
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';


class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">{process.env.NODE_ENV}</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">{process.env.REACT_APP_SECRET_CODE}</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <Game/>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);