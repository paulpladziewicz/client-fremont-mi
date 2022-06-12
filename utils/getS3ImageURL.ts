import { S3_IMAGE_BASE_PATH } from '../constants';

export const getS3ImageURL = (path: string) => {
  if (!path) return '';

  return S3_IMAGE_BASE_PATH + path;
};
