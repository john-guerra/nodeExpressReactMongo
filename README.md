# nodeExpressReactMongo

Very basic application combining

- Node@16
- Express@5
- React@18
- React-Router@6
- Mongo@6 (npm mongodb@4 )

Shows CA Proposition donations for Nov 2022.

## Running

Clone it and then

```
yarn install
yarn postinstall
yarn start
```

## Loading default data

If you have mongoimport installed

```
yarn run importdata
```

which runs

```
mongoimport -d CABallotDonations -c propositions --file ./data/propositions.json --drop
```

## TA here are my Milestones for the rubric!!!

I created the milestones using releases.

- [60% Nov 15 ](https://github.com/john-guerra/nodeExpressReactMongo/releases/tag/nov15_60%25) In this one I had already implemented blahblahblah
