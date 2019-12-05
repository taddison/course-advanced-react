const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO are they logged in?

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  }

};



module.exports = mutations;
