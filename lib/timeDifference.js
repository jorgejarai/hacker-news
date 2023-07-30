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
  if (seconds < 60) return $nuxt.$tc('units.seconds', seconds);

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return $nuxt.$tc('units.minutes', minutes);

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return $nuxt.$tc('units.hours', hours);

  return $nuxt.$d(date, 'short');
};

export default timeDifference;
