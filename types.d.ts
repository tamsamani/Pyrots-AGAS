/** string that's represented as Number */
type numberString = string;

/** string that's represented as Date Formate */
type dateString = string;

/** the Integer Type of number */
type DBType_Int = number | numberString;

/** the Date type representation by database */
type DBType_Date = Date | number | dateString;