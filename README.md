[![npm version](https://img.shields.io/npm/v/divine-pride-api-wrapper.svg?style=flat-square)](https://www.npmjs.com/package/divine-pride-api-wrapper)

# Unofficial Divine Pride API in NodeJS

Unofficial API wrapper for [DivinePride](https://www.divine-pride.net/api)

## Install

```shell
npm install divine-pride-api-wrapper
```

## Credentials

You will need a divine pride account. To create an account just go to this page: [Register](https://www.divine-pride.net/forum/index.php?/register/)

The key can be obtained on account page: [Account](https://www.divine-pride.net/account)

## Using the wrapper

```javascript
import DivinePride from 'divine-pride-api-wrapper';

const api = new DivinePride('YOUR_DIVINE_PRIDE_API_KEY');
```

## Methods

### .setServer(server)

<!-- Seems to take precedence over language setting. -->
Change the language and information of the response data.

```javascript
api.setServer('bRO')
```

```text
Servers
aRO, bRO, fRO, idRO, iRO, jRO, kROM, kROZ, kROZS, GGH, ruRO, thROG, twRO, cRO, iROC
```

<!-- ### .setLanguage(language)

Also change the language of the response data.
Will be sent in the Accept-Language header. -->

### .getAchievement(id)

```javascript
api.getAchievement(200031)
```

### .getBuff(id)

```javascript
api.getBuff(12)
```

### .getExperience()

```javascript
api.getExperience()
```

### .getItem(id)

```javascript
api.getItem(2576)
```

### .getMap(id)

```javascript
api.getMap('prt_fild08')
```

### .getMonster(id)

```javascript
api.getMonster(1002)
```

### .getNpcIdentity(id)

```javascript
api.getNpcIdentity(1002)
```

### .getQuest(id)

```javascript
api.getQuest(1000)
```

### .getSkill(id)

```javascript
api.getSkill(29)
```

### .getTitle(id)

```javascript
api.getTitle(1022)
```
