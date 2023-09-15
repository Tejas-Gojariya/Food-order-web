import classes from './MealsSummary.module.css';
import { MenuCard } from './MenuCard';
import MainPage from './MealItem/MainPage';

const MealsSummary = () => {
  return (
    <>
    <section   className={classes.summary}>
      <h2 className='pt-5 mt-8 max-w-4xl text-3xl font-bold text-white md:text-4xl lg:text-6xl pb-5'>Discover India's Flavors on Our Food Website.</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    {/* <MenuCard/> */}
    </section>
    <MainPage/>
    <MenuCard/>
 
    </>
  );
};

export default MealsSummary;
