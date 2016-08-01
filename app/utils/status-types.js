export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const generateActionStatusTypes = (baseActionType, statusCode) => {
  if (statusCode >= 200 && statusCode < 400) {
    return `${baseActionType}_${SUCCESS}`;
  } else if (statusCode >= 400) {
    return `${baseActionType}_${ERROR}`;
  }

  return `${baseActionType}_${START}`;
}
