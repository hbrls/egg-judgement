const WebClientException = require('egg-web/exception/WebClientException');


module.exports = options => {
  return async function pdp(ctx, next) {
    const {
      subOrg: defaultSubOrg,
      subNs: defaultSubNs,
      subTyp: defaultSubTyp,
      resOrg: defaultResOrg,
      resNs: defaultResNs } = ctx.app.config.judgement;

    const {
      subOrg = defaultSubOrg,
      subNs = defaultSubNs,
      subTyp = defaultSubTyp,
      subId = ctx.local.uid, // FIXME:
      resOrg = defaultResOrg,
      resNs = defaultResNs,
      resTyp,
      resId: resIdKey = null,
      resAct
    } = options;

    // TODO: resId
    let resId = null;
    if (resIdKey) {
      resId = ctx.params[resIdKey];
    }

    const req = { subOrg, subNs, subTyp, subId, resOrg, resNs, resTyp, resId, resAct };
    // ctx.logger.info(req);

    const { status, headers, data, res } = await ctx.curl(ctx.discovery.judgement + '/pdp', {
      method: 'POST',
      contentType: 'json',
      dataType: 'json',
      data: req,
    });
    // TODO: assert status === 200

    // ctx.logger.info(data);
    if (data.effect !== 'permit') {
      throw new WebClientException(403, 8403, 'PDP DENY');
    }

    await next();
  }
};
