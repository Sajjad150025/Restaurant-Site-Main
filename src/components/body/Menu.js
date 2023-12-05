import React, { Component } from 'react'
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalFooter, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../../redux/ActionCreators';
import Loading from './Loading';



const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Menu extends Component {

    state ={
        selectedDish : null,
        modalOpen : false
    }

    onSelectDish = dish =>{
        this.setState({
            selectedDish :dish,
            modalOpen : !this.state.modalOpen
        })
        
    }

    toggleModal = () =>{
        this.setState({
            modalOpen : !this.state.modalOpen
        })
    }

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render(){
        

        document.title = "Menu";

        if(this.props.dishes.isLoading){
            return(
                <Loading/>
            );
        }
        else if(this.props.dishes.isLoading != null) {
            return(
                <Alert color='danger'>{this.props.dishes.errMsg}</Alert>
            )
        }
        else{
            const menu = this.props.dishes.dishes.map((item)=>{
                return <MenuItem dish={item} onSelectDish={this.onSelectDish} key={item.id} DishSelect={() => this.onSelectDish(item)} />
            })
    
            let dishDetail = null;
        
            if(this.state.selectedDish != null){
                const comments = this.props.comments.comments.filter(comment=> comment.dishId === this.state.selectedDish.id);
                dishDetail = <DishDetail dish= {this.state.selectedDish} comments ={comments} addComment={this.props.addComment} commentIsLoading={this.props.comments.isLoading} />
            } ;
            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>{menu}</CardColumns>
                        <Modal isOpen ={this.state.modalOpen}>
                            {dishDetail}
                            <ModalFooter>
                                <Button color='primary' onClick={this.toggleModal}>close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            )
        }
    }
        
}


export default connect(mapStateToProps, mapDispatchToProps) (Menu);
