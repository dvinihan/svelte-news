export const getPastDateString = (daysAgo: number) => {
  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - daysAgo);

  return yesterday.toDateString();
};
