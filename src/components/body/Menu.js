import React, {Component} from "react";
import DISHES from '../../Data/dishes';
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from "reactstrap";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });

    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    render() {
        const menu = this.state.dishes.map(item => {
            return (<MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}/>);
        });
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetails dish={this.state.selectedDish}/>
        }
        return (<div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;
