module.exports = options => {
  return async function pdp(ctx, next) {
    // 1. touch webtoken
    // await ctx.service.webTokenService.update({});
    // ctx.logger.info(ctx.local);

    await next();
  }
};
