export const dateToString = (date: Date) => date.toLocaleString("en", { month: "short", year: "numeric" });

export const getDateMonthDifference = (from: Date, to: Date) => {
    const monthDifference = to.getMonth() - from.getMonth();
    const yearDifference = to.getFullYear() - from.getFullYear();
    return monthDifference + (12 * yearDifference);
};