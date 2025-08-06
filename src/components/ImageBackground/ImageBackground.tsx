import React from 'react';
import { ImageComponentProps } from './types';
import { Container, BackgroundImage } from './ImageBackground.styles';

const ImageComponent: React.FC<ImageComponentProps> = ({
  source,
  height,
  width,
  style = {},
  children,
  ...rest
}) => {
  return (
    <Container height={height} width={width}>
      <BackgroundImage source={source} style={style} {...rest}>
        {children}
      </BackgroundImage>
    </Container>
  );
};

export default ImageComponent;
