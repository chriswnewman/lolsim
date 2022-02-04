import * as Champion from './../model'

const getExoplanets = async () => {
  try {
    return await Champion.find({});
  } catch (err) {
    return err;
  }
};
module.exports = { getExoplanets };
