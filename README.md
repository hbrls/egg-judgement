egg-judgement
==

## Install

```bash
$ npm i egg-judgement --save
```

## Usage

```javascript
// config/plugin.js
exports.egg-judgement = {
  enable: true,
  package: 'egg-judgement',
};

// config/config.default.js
config.judgement = {
  subOrg: 'co.bo7.sakiel',
  subNs: 'sakiel',
  subTyp: 'user',
  // subId: ctx.local.uid,
  resOrg: 'co.bo7.sakiel',
  resNs: 'sakiel',
}
```

## [MIT License](LICENSE)
