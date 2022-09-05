const BASE_URL = `http://www.localhost:3000`;
//Get all employees
export const getEmployee = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users`);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};
// get single employee
export const getSingleEmployee = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`);
    const json = await response.json();
    if (json) return json;
    return {};
  } catch (error) {
    return error;
  }
};

// posting a new employee
export async function addEmployee(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

// Update a employee
export async function updateEmployee(userId, formData) {
  try {
    const Options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
// Delete a Employee
export async function deleteEmployee(userId) {
  try {
    const Options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}
