import React, { Component } from 'react';
import Categories from '../../categories/components/categories';
import HomeLayout from '../components/home-layout';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    modalVisible: false
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related/>
       
          <Categories categories={this.props.categories} handleOpenModal={this.handleOpenModal}/>
          {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer src={this.state.media.src} title={this.state.media.title} autoplay />
            </Modal>
          </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories: state.data.categories
  }
}

export default connect(mapStateToProps)(Home);
