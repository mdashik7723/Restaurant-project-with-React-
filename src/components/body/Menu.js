import React, {Component} from "react";
import DISHES from '../../Data/dishes';
import COMMENTS from "../../Data/Comments";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from "reactstrap";
import comments from "../../Data/Comments";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments
    }


}

class Menu extends Component {
    state = {
        dishes: DISHES,
        comments:COMMENTS,
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
        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (<MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}/>);
        });
        let dishDetail = null;
        if (this.state.selectedDish != null) {
const comments = this.props.comments.filter(comment =>comment.dishId === this.state.selectedDish.id
)
            dishDetail = <DishDetails
                dish={this.state.selectedDish}
            comments={comments}/>
        }
        return (<div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
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

export default connect(mapStateToProps)(Menu);
