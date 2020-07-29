import moment from 'moment';

const formatDate = (timestamp, format = 'MMM D, YYYY') =>
  moment(timestamp).format(format);

export default formatDate;
