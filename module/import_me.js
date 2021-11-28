const me = (data) => {
  console.log(`This is the imported file.`);
  console.log("Exports Square of " + data);

  return data * data;
};
module.exports = me;
