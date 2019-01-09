import moment from 'moment';

export const progressPercentage = ({ complete, duration, timemark }) => {
  if (timemark) {
    return moment.duration(timemark).asMilliseconds() / (duration * 10);
  } else if (complete) {
    return 100;
  } else {
    return 0;
  }
};
