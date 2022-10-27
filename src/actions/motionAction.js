import {
  DRAG_IMAGE_IN_PREVIEW,
  MOVE_IMAGE_LEFT,
  MOVE_IMAGE_RIGHT,
  MOVE_IMAGE_UP,
  MOVE_IMAGE_DOWN,
  ROTATE_LEFT,
  ROTATE_RIGHT,
  RESET_POSITIONS,
  UPDATE_MOTION_ORDER,
  MID_AREA_STACK_UPDATION,
} from "./actionTypes";

export const dragImageInPreview = (payload) => ({
  type: DRAG_IMAGE_IN_PREVIEW,
  payload,
});

export const moveImageUp = (payload) => ({
  type: MOVE_IMAGE_UP,
  payload,
});

export const moveImageDown = (payload) => ({
  type: MOVE_IMAGE_DOWN,
  payload,
});

export const moveImageLeft = (payload) => ({
  type: MOVE_IMAGE_LEFT,
  payload,
});

export const moveImageRight = (payload) => ({
  type: MOVE_IMAGE_RIGHT,
  payload,
});

export const rotateLeft = (payload) => ({
  type: ROTATE_LEFT,
  payload,
});

export const rotateRight = (payload) => ({
  type: ROTATE_RIGHT,
  payload,
});

export const resetPositions = () => ({
  type: RESET_POSITIONS,
});

export const updateMotionOrder = (payload) => ({
  type: UPDATE_MOTION_ORDER,
  payload,
});

export const midAreaStackUpdation = (payload) => ({
  type: MID_AREA_STACK_UPDATION,
  payload,
});
