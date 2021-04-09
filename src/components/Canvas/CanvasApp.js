import PropTypes from 'prop-types';
import React from 'react';
import { Stage, Layer, Star, Text, Image } from 'react-konva';
import CanvasBar from './CanvasBar';



const INITIAL_STATE = generateShapes();

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

class CanvasApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: INITIAL_STATE
    }
  }
  
  handleDragStart = (e) => {
    console.log(this.props.fileSelection)
    const id = e.target.id();
    this.setState({
      stars: this.state.stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    }
    );
  };

  handleDragEnd = (e) => {
    this.setState({
      stars: this.state.stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    }
    );
  };

  render() {
    const stars = this.state.stars
    console.log(this.props)
    return (
      <Stage className='myStage' width={0 || this.props.imageWidth} height={0 || this.props.imageHeight}>
        <Layer>
          <Text text="Try to drag a star" />
          <Image 
            image={this.props.imageRaw}
          />
          {this.state.stars.map((star) => (
            <Star
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={star.rotation}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

CanvasApp.propTypes = {
  fileSelection: PropTypes.object,
  addText: PropTypes.string,
  addCheckBox: PropTypes.string,
  addSignature: PropTypes.func,
  imageRaw: PropTypes.string
}

export default CanvasApp;
