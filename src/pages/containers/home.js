import React, { Component } from 'react'
import { HomeLayout } from '../components/home-layout'
import { Categories } from '../../categories/components/categories'
import { Related } from '../components/related'
import { ModalContainer } from '../../widgets/containers/modal';
import { Modal } from '../../widgets/components/modal'
import { VideoPlayer } from '../../player/containers/video-player'

export class Home extends Component {
  state = {
    modalVisible: true
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseClick = (event) => {
    this.setState({
      modalVisible: false
    })
  }

  render () {
    return (
      <HomeLayout>
        <Related />
        <VideoPlayer 
          autoplay={false}
        />
        <Categories 
          categories={this.props.data.categories}
          handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleCloseClick={this.handleCloseClick}
            >
              <h1>Este es un portal</h1>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout> 
    )
  }
}
