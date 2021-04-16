import React, { RefObject } from 'react';
import { TextMode } from '../entities';
import { Rnd } from 'react-rnd';
import { CallReceived } from '@material-ui/icons/';

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "yellow"
} as const;

interface Props {
  inputRef: RefObject<HTMLInputElement>;
  text?: string;
  mode: string;
  width: number;
  size?: number;
  RndProps: any;
  height: number;
  lineHeight?: number;
  fontFamily?: string;
  positionTop: number;
  positionLeft: number;
  toggleEditMode: () => void;
  handleMouseDown: DragEventListener<HTMLDivElement>;
  handleMouseUp: DragEventListener<HTMLDivElement>;
  handleMouseMove: DragEventListener<HTMLDivElement>;
  handleMouseOut: DragEventListener<HTMLDivElement>;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Text: React.FC<Props> = ({
  text,
  width,
  height,
  inputRef,
  mode,
  size,
  RndProps,
  fontFamily,
  positionTop,
  positionLeft,
  onChangeText,
  toggleEditMode,
  handleMouseDown,
  handleMouseMove,
  handleMouseOut,
  handleMouseUp,
  lineHeight,
}) => {

  return (
    <>
    {/* This is a draggable component, it records the users box size and position on the page and will has an accept and deny button attached to it */}
    <Rnd
      style={style}
      default={{
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      }}
      ref={c => { 
        RndProps = c}}
      onResize={() => { console.log('This is the RndProps! ', RndProps, 'This is state', ); }}
      onDragStop={(delta) => {
        console.log(delta.view, inputRef, size);
      }}
      bounds="canvas"
      enableResizing={{ 
        top:false, 
        right:true, 
        bottom:false, 
        left:false, 
        topRight:true, 
        bottomRight:true, 
        bottomLeft:false, 
        topLeft:false }}
        resizeHandleComponent={{
          bottomRight: <CallReceived style={{ transform: 'rotate(270deg)', fontSize: '8', marginLeft: '10%', marginBottom: '45%'}} />,
          topRight: <CallReceived style={{ transform: 'rotate(180deg)', fontSize: '8', marginLeft: '10%', marginTop: '23%'}} />,
        }}
    />
      <button className='yesBtn confirmBtnArea'>Test Button</button>
      <button className='noBtn confirmBtnArea'>Test Button</button>

      </>
    // <div
    //   onMouseDown={handleMouseDown}
    //   onMouseMove={handleMouseMove}
    //   onMouseUp={handleMouseUp}
    //   onMouseOut={handleMouseOut}
    //   onDoubleClick={toggleEditMode}
    //   style={{
    //     width,
    //     border: 1,
    //     height,
    //     fontFamily,
    //     fontSize: size,
    //     lineHeight,
    //     cursor: mode === TextMode.COMMAND ? 'move' : 'default',
    //     top: positionTop,
    //     left: positionLeft,
    //     borderColor: 'gray',
    //     borderStyle: 'solid',
    //     wordWrap: 'break-word',
    //     padding: 0,
    //     position: 'absolute',
    //   }}
    // >
    //   <input
    //     type="text"
    //     ref={inputRef}
    //     onChange={onChangeText}
    //     readOnly={mode === TextMode.COMMAND}
    //     style={{
    //       width: '100%',
    //       border: '2px solid',
    //       fontFamily,
    //       fontSize: size,
    //       outline: 'none',
    //       padding: 0,
    //       boxSizing: 'border-box',
    //       lineHeight,
    //       height,
    //       margin: 0,
    //       resize: 'both',
    //       overflow: 'auto',
    //       backgroundColor: 'transparent',
    //       cursor: mode === TextMode.COMMAND ? 'move' : 'text',
    //     }}
    //     value={text}
    //   />
    // </div>
  );
};
