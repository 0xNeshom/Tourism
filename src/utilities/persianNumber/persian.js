export const toPersianDigits = (num) => {
    return num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
  };
  