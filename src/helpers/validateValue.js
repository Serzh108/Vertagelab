const validateValue = value => {
  let res;
  for (let key in value) {
    res = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value[key]);
    if (!res) {
      // alert(`${value[key]} - wrong data format!`);
      return res;
    }
    // const res = /^#(?:[A-Fa-f0-9]{3}){1,2}$/.test(value);
  }
  return res;
};

export default validateValue;
