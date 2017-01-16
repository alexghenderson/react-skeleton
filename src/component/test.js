import {createElement} from 'react';
import {connect} from 'react-redux';

import map from 'lodash/fp/map';

import getRecipes, {fakeError} from 'action/recipe';

const Test = ({inProgress, isError, count, data, getRecipes, fakeError}) => {
  return (
    <div>
      <h1>Recipes!</h1>
      <button onClick={getRecipes} disabled={inProgress}>
        Fetch Recipes
      </button>
      <button onClick={fakeError} disabled={inProgress}>
        Fetch Recipes (but fail)
      </button>
      {
        isError ?
        <div>Oh noes! Something went wrong!</div>
        :
        <div>
          <h3>List ({count} total)</h3>
          <ul>
            {map((recipe) => (<li key={recipe.id}>{recipe.name}</li>))(data)}
          </ul>
        </div>
      }
    </div>
  );
};

const mapStateToProps = ({recipe}) => ({
  inProgress: recipe.status.inProgress,
  isError: recipe.status.isError,
  count: recipe.count,
  data: recipe.data,
});

const mapDispatchToProps = {
  getRecipes,
  fakeError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
