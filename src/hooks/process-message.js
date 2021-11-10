// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context;

    if(!data.text) {
      throw new Error('A message must have text!');
      //?NOTE when errors are thrown in hooks, it returns out of the current hook and stops execution of all following hooks and sends the error straight to the client
    }

    const { user } = context.params;

    const text = data.text.substring(0, 400);

    context.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    }

    return context;
  };
};
