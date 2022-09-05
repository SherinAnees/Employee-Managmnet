const BASE_URL = `http://www.localhost:3000`;
export const getEmployee = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();

  return json;
};
