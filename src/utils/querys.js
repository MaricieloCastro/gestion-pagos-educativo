export const paramsConstructor = (params) => {
  let queryParams = '';

  for (const key in params) {
    if (params[key] !== '') {
      queryParams += `&${key}=${params[key]}`;
    }
  }

  return queryParams;
};
