import moment from "moment";

export const momentFromNow = (date: Date) => {
  const newDate = new Date(date);
  const formattedDate = moment(newDate).fromNow();
  return formattedDate;
};

export const shortDateFormatter = Intl.DateTimeFormat("en-us", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "Asia/Manila",
});
