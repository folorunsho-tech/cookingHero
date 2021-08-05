import { useState, useEffect } from "react";
import { useParams } from "react-router";
import FoodSection from "../components/FoodSection";
import axios from "axios";
const Searched = () => {
  const { search } = useParams();
  const [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    (async function () {
      setLoading(true);
      const { data } = await axios.get(
        `www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setLoading(false);
      setRecipes(data.meals);
    })();
  }, [search]);

  return (
    <section className="col-span-5 lg:mt-3 space-y-12">
      <FoodSection
        title={`You Searched For${search}`}
        content={recipes}
        showOptions={false}
        loading={loading}
      />
    </section>
  );
};
export default Searched;
