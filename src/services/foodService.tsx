export const getCategoriesList = async () => {
  try {
    const data = await (
      await fetch(
        'https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/aaffe99bfa0f5d46d17b3715a3c16a1d83527db1/categories.json'
      )
    ).json();
    return data;
  } catch (error) {
    throw new Error(`server error: ${error}`);
  }
};

export const getRestaurantsList = async () => {
  try {
    const data = await (
      await fetch(
        'https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/ef4e1b48002e5017dd78bbb48a2adf8a97419529/food.json'
      )
    ).json();
    return data;
  } catch (error) {
    throw new Error(`server error: ${error}`);
  }
};
