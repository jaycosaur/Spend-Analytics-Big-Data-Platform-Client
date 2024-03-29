import React from 'react'
import PropTypes from 'prop-types'

const getInterpolatedValue = (y1, y2, x) => {
    const a = y2 - y1
    return a * x + y1
  }
/**
 * Our first component, `ScrollArea`, tracks its children
 * as they're scrolled through the scrollable area (a
 * specific subset of the viewport).
 */
const scrollAreaPropTypes = {
    // The number of pixels between the top of the viewport,
    // and the top of the scrollable area:
    topBuffer: PropTypes.number.isRequired,
    // The height, in pixels, of the scrollable area:
    areaHeight: PropTypes.number.isRequired,
    // We'll make the `scrollRatio` data available to its
    // children with a `children` render prop:
    children: PropTypes.func.isRequired,
  };
  
  class ScrollArea extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        scrollRatio: 0,
      };
  
      this.handleScroll = this.handleScroll.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll(ev) {
      const { topBuffer, areaHeight } = this.props;
  
      const windowHeight = window.innerHeight;
      const boundingBox = this.node.getBoundingClientRect();
  
      const distanceToTop = boundingBox.top - topBuffer;
      const pixelsScrolled = areaHeight - distanceToTop;
  
      let scrollRatio = pixelsScrolled / areaHeight;
      scrollRatio = clamp(scrollRatio, 0, 1);
  
      if (this.state.scrollRatio !== scrollRatio) {
        this.setState({ scrollRatio });
      }
    }
  
    render() {
      return (
        <div style={{height: "100%", marginBottom: -5}} ref={node => this.node = node}>
          {this.props.children(this.state)}
        </div>
      );
    }
  }
  
  ScrollArea.propTypes = scrollAreaPropTypes;
  

  const BezierCurve = ({
    viewBoxWidth,
    viewBoxHeight,
    startPoint,
    firstControlPoint,
    secondControlPoint,
    endPoint,
    fill
  }) => {
    return (
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <path
          d={`
            M ${startPoint}
            C ${firstControlPoint}
              ${secondControlPoint}
              ${endPoint}
            L ${viewBoxWidth},${viewBoxHeight}
            L 0,${viewBoxHeight}
          `}
          fill={fill}
        />
      </svg>
    );
  }
  
  /**
   * The two components above are the building blocks
   * for the effect we want to build. This last component
   * assembles them.
   *
   * It takes the `headerHeight` as a prop, so that we
   * can flatten it at the right moment.
   */
  const ScrollBasedBezier = ({ headerHeight, color }) => (
    <ScrollArea
      topBuffer={headerHeight}
      areaHeight={
        // By setting a relatively small ScrollArea height,
        // we get to see the fully-curved version for a bit
        // before the flattening starts :D
        window.innerHeight * 0.9
      }
    >
      {({ scrollRatio }) => {
        // Hardcoding these values since this component
        // isn't meant to be reusable.
        const viewBoxWidth = 300;
        const viewBoxHeight = 50;
  
        const startPointY = getInterpolatedValue(
          50,
          0,
          scrollRatio
        );
  
        const firstControlPointY = getInterpolatedValue(
          -50,
          0,
          scrollRatio
        );
  
        const secondControlPointY = getInterpolatedValue(
          100,
          0,
          scrollRatio
        );
  
        const endPointY = 0;
  
        return (
          <BezierCurve
            viewBoxWidth={viewBoxWidth}
            viewBoxHeight={viewBoxHeight}
            startPoint={[0, startPointY]}
            firstControlPoint={[100, firstControlPointY]}
            secondControlPoint={[200, secondControlPointY]}
            endPoint={[300, endPointY]}
            fill={color}
          />
        );
      }}
    </ScrollArea>
  );
  
  const clamp = (val, min, max) =>
    Math.max(min, Math.min(max, val));
  
export default ScrollBasedBezier