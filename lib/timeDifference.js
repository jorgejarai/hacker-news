/**
 * Returns a human-readable time difference string.
 *
 * @param {Date} date - The date to compare to.
 * @returns {string} The human-readable time difference string.
 */
const timeDifference = (date) => {
  const now = new Date();
  const difference = now.getTime() - date.getTime();

  const seconds = Math.floor(difference / 1000);
  if (seconds === 1) return `1 second ago`;
  else if (seconds < 60) return `${seconds} seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) return `1 minute ago`;
  else if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours === 1) return `1 hour ago`;
  else if (hours < 24) return `${hours} hours ago`;

  return date.toLocaleDateString('en-US');
};

export default timeDifference;
