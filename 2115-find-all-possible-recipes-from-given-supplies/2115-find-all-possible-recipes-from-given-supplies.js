/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const setSupplies = new Set(supplies);
  const setYes = new Set(),
    setNo = new Set();
  const map = new Map();

  recipes.forEach((val, idx) => map.set(val, ingredients[idx]));

  function hasRecipe(recipe, set) {
    if (set.has(recipe)) {
      setNo.add(recipe);

      return false;
    } else {
      set.add(recipe);
    }

    if (setYes.has(recipe)) return true;

    if (setNo.has(recipe)) return false;

    if (!recipes.includes(recipe)) {
      setNo.add(recipe);

      return false;
    }

    const ingredientList = map.get(recipe);

    for (let ingredient of ingredientList) {
      if (hasIngredient(ingredient)) {
        continue;
      }

      if (!hasRecipe(ingredient, new Set(set))) {
        setNo.add(ingredient);

        return false;
      }

      setYes.add(ingredient);
    }

    setYes.add(recipe);

    return true;
  }

  function hasIngredient(ingredient) {
    return setSupplies.has(ingredient) ? true : false;
  }

  return recipes.filter((val) => hasRecipe(val, new Set()));
};
