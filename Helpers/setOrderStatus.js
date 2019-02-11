module.exports = (statusNum) => {
  switch (statusNum) {
    case 0:
      return 'Pending';

    case 1:
      return 'Completed';

    case 2:
      return 'Shipped';

    case 3:
      return 'Refunded';

    default:
      return 'Error';
  }
};
