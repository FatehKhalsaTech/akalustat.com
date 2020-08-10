import React, {ReactNode} from 'react'

interface ContainerProps {
  className: string;
  children?: ReactNode;
}


const BaseTextContainer: React.FC<ContainerProps> = ( {className, children } ) => (
  <div className={className}>
    {children}
  </div>
)

const GurmukhiTextContainer: React.FC<ContainerProps> = ( {children, className} ) => (
  <BaseTextContainer className={`${className} font-gurbani `}>
      {children}
  </BaseTextContainer>
)

export {BaseTextContainer, GurmukhiTextContainer}
