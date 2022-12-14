import Modal from '../Modal/Modal';
import { Component } from 'react';
import { ImageGalleryItemStyled, ImgStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModalOpen = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { item } = this.props;
    const { webformatURL, tags } = item;
    const { isModalOpen } = this.state;

    return (
      <>
        <ImageGalleryItemStyled>
          <ImgStyled
            loading="lazy"
            src={webformatURL}
            alt={tags}
            onClick={this.handleToggleModalOpen}
          />
        </ImageGalleryItemStyled>
        {isModalOpen && (
          <Modal item={item} onClose={this.handleToggleModalOpen} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default ImageGalleryItem;
