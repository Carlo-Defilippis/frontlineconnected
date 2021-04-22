interface W3Color {
  toRgb: () => { r: number; b: number; g: number; a: number };
}

declare interface Window {
  w3color: (
    color: Record<string, unknown> | string,
    element?: HTMLElement
  ) => W3Color;
}

type AttachmentType = 'image' | 'text' | 'drawing';

interface AttachmentBase {
  id: () => number;
  width: number;
  height: number;
  x: number;
  y: number;
  type: AttachmentType;
}
interface ImageAttachment extends AttachmentBase {
  file: File;
  img: HTMLImageElement;
}

interface DrawingAttachment extends AttachmentBase {
  path?: string;
  scale?: number;
  stroke?: string;
  strokeWidth?: number;
}

interface TextAttachment extends AttachmentBase {
  text?: {};
  fontFamily?: string;
  size?: number;
  lineHeight?: number;
  lines?: string[];
}

interface Dimensions {
  x: number;
  y: number;
  width: number;
  height: number;
}

type Attachment = ImageAttachment | DrawingAttachment | TextAttachment;

type Attachments = Attachment[];

type DragEventListener<T> = (e: React.MouseEvent<T>) => void;


type DraggableData = {
  node: HTMLElement,
  x: number,
  y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
  bounds: string
};

type DraggableEventHandler = (
  attachment: SyntheticMouseEvent | SyntheticTouchEvent, data: DraggableData,
) => void | false;

type TransformWrapper = {
  scale: number
}