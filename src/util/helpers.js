// formats date correctly to MM-DD-YY, and adds month abbreviation if asked for, from YYYY-MM-DD
export const properDate = function (date, style) {
      date = date.split("-");
      let year = date[0];
      let day = date[2];
      let month = date[1];
      return style === "number"
        ? [month, day, year.slice(2)].join("-")
        : [monthName(month), day, year.slice(2)].join("-");
    }

// gives month name to month number
export const monthName = function (month) {
      return [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ][parseInt(month - 1)];
    }
