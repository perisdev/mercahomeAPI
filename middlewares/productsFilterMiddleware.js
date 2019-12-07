/** 
 * builds filter products by 'id' or ('name' or/and 'category')
 * --------------------------------------------------------------*/

const productsFilterMiddleware = async (req, res, next) => {

  let select = "SELECT products.*, categories.category FROM `products`, `categories` WHERE products.fk_category = categories.id";

  // only by id
  if (req.query.id)
    select = select.concat(` && products.id = ${req.query.id}`);

  // by name or/and category
  else {

    // by name
    if (req.query.name)
      select = select.concat(` && products.name LIKE '%${req.query.name}%'`);

    if (req.query.category) {

      // by category like a string
      if (isNaN(parseInt(req.query.category)))
        select = select.concat(` && categories.category = '${req.query.category}'`);

      // by category like a number
      else
        select = select.concat(` && products.fk_category = ${req.query.category}`);

    }
  }

  req.select = select;
  next();
};

module.exports = productsFilterMiddleware;
