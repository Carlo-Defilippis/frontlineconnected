import React, { useState, useRef } from 'react';
import { Text as Component } from '../components/Text';
import { getMovePosition } from '../utils/helpers';
import { DragActions, TextMode } from '../entities';
import { TransformComponent } from 'react-zoom-pan-pinch';
import { PropsList } from 'react-zoom-pan-pinch/dist/store/interfaces/propsInterface';

interface Props {
  pageWidth: number;
  pageHeight: number;
  updateTextAttachment: (textObject: Partial<TextAttachment>) => void;
}

export const Text = ({
  x,
  y,
  text,
  width,
  height,
  lineHeight,
  size,
  fontFamily,
  pageHeight,
  pageWidth,
  updateTextAttachment
}: TextAttachment & Props) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(text || '');
  const [mouseDown, setMouseDown] = useState(false);
  const [positionTop, setPositionTop] = useState(y);
  const [positionLeft, setPositionLeft] = useState(x);
  const [operation, setOperation] = useState<DragActions>(
    DragActions.NO_MOVEMENT
  );
  const [textMode, setTextMode] = useState<TextMode>(TextMode.COMMAND);

  const handleMouseMove = (e: DraggableEventHandler) => {
    console.log(e);

    if (mouseDown) {
      const { top, left } = getMovePosition(
        positionLeft,
        positionTop,
        e.movementX,
        e.movementY,
        width,
        height,
        pageWidth,
        pageHeight
      );

      setPositionTop(top);
      setPositionLeft(left);
    }
  };

  const handleMousedown = (attachment: DraggableEventHandler, data: DraggableEventHandler) => {
    console.log(attachment, data);
    if (textMode !== TextMode.COMMAND) {
      return;
    }
    
    setMouseDown(true);
    setOperation(DragActions.MOVE);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (textMode !== TextMode.COMMAND) {
      return;
    }

    setMouseDown(false);

    if (operation === DragActions.MOVE) {
      const { top, left } = getMovePosition(
        positionLeft,
        positionTop,
        event.movementX,
        event.movementY,
        width,
        height,
        pageWidth,
        pageHeight
      );

      updateTextAttachment({
        x: left,
        y: top,
      });
    }

    // if (operation === DragActions.SCALE) {
    //     updateTextObject({
    //         x: positionLeft,
    //         y: positionTop,
    //     });

    // }

    setOperation(DragActions.NO_MOVEMENT);
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (operation === DragActions.MOVE) {
      handleMouseUp(event);
    }

    if (textMode === TextMode.INSERT) {
      setTextMode(TextMode.COMMAND);
      prepareTextAndUpdate();
    }
  };

  const prepareTextAndUpdate = () => {
    // Deselect any selection when returning to command mode
    document.getSelection()?.removeAllRanges();

    const lines = [content];
    updateTextAttachment({
      lines,
      text: content,
    });
  };

  const toggleEditMode = () => {
    const input = inputRef.current;
    const mode =
      textMode === TextMode.COMMAND ? TextMode.INSERT : TextMode.COMMAND;

    setTextMode(mode);

    if (input && mode === TextMode.INSERT) {
      input.focus();
      input.select();
    } else {
      prepareTextAndUpdate();
    }
  };

  const onChangeText = (e: DraggableEventHandler) => {
    const value = e;
    // const myData = data
    setContent(value);
    console.log('Value: ', value);

    updateTextAttachment({
      x: value.layerX,
      y: value.layerY,
    });

  };

  return (
    <Component
      text={content}
      width={width}
      height={height}
      mode={textMode}
      size={size}
      RndProps={inputRef}
      lineHeight={lineHeight}
      inputRef={inputRef}
      fontFamily={fontFamily}
      positionTop={positionTop}
      onChangeText={onChangeText}
      positionLeft={positionLeft}
      handleMouseUp={handleMouseUp}
      toggleEditMode={toggleEditMode}
      handleMouseOut={handleMouseOut}
      handleMouseDown={handleMousedown}
      handleMouseMove={handleMouseMove}
    />
  );
};
