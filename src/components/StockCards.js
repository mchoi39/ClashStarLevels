import React, { useState } from 'react';
import StarCard from './StarCard';
import StarLevel from './StarLevel';
// import common from '../assets/';
// import rare from '../assets/rare';
// import epic from '../assets/epic';
// import legendary from '../assets/legendary';
import stockcards from '../assets/stockcards';
import { Container, Row, Form } from 'react-bootstrap';

export default function StockCards() {
  const initial = {
    archers: { hide: false },
    arrows: { hide: false },
    babydragon: { hide: false },
    balloon: { hide: false },
    bandit: { hide: false },
    barbarianbarrel: { hide: false },
    barbarianhut: { hide: false },
    barbarians: { hide: false },
    bats: { hide: false },
    battlehealer: { hide: false },
    battleram: { hide: false },
    bombtower: { hide: false },
    bowler: { hide: false },
    cannoncart: { hide: false },
    cannon: { hide: false },
    clone: { hide: false },
    darkprince: { hide: false },
    dartgoblin: { hide: false },
    earthquake: { hide: false },
    electrodragon: { hide: false },
    electrogiant: { hide: false },
    electrospirit: { hide: false },
    electrowizard: { hide: false },
    elitebarbarians: { hide: false },
    elixircollector: { hide: false },
    elixirgolem: { hide: false },
    executioner: { hide: false },
    firespirits: { hide: false },
    fireball: { hide: false },
    firecracker: { hide: false },
    fisherman: { hide: false },
    flyingmachine: { hide: false },
    freeze: { hide: false },
    furnace: { hide: false },
    giantskeleton: { hide: false },
    giantsnowball: { hide: false },
    giant: { hide: false },
    goblinbarrel: { hide: false },
    goblincage: { hide: false },
    goblingang: { hide: false },
    goblingiant: { hide: false },
    goblinhut: { hide: false },
    goblins: { hide: false },
    golem: { hide: false },
    graveyard: { hide: false },
    guards: { hide: false },
    healspirit: { hide: false },
    hogrider: { hide: false },
    hunter: { hide: false },
    icegolem: { hide: false },
    icespirit: { hide: false },
    icewizard: { hide: false },
    infernodragon: { hide: false },
    infernotower: { hide: false },
    knight: { hide: false },
    lavahound: { hide: false },
    lightning: { hide: false },
    lumberjack: { hide: false },
    magicarcher: { hide: false },
    megaknight: { hide: false },
    megaminion: { hide: false },
    miner: { hide: false },
    minipekka: { hide: false },
    minionhorde: { hide: false },
    minions: { hide: false },
    mirror: { hide: false },
    mortar: { hide: false },
    motherwitch: { hide: false },
    pekka: { hide: false },
    poison: { hide: false },
    prince: { hide: false },
    princess: { hide: false },
    rage: { hide: false },
    ramrider: { hide: false },
    rascals: { hide: false },
    rocket: { hide: false },
    royaldelivery: { hide: false },
    royalghost: { hide: false },
    royalgiant: { hide: false },
    royalhogs: { hide: false },
    royalrecruits: { hide: false },
    skeletonarmy: { hide: false },
    skeletonbarrel: { hide: false },
    skeletondragons: { hide: false },
    skeletons: { hide: false },
    sparky: { hide: false },
    speargoblins: { hide: false },
    tesla: { hide: false },
    log: { hide: false },
    threemusketeers: { hide: false },
    tombstone: { hide: false },
    tornado: { hide: false },
    valkyrie: { hide: false },
    wallbreakers: { hide: false },
    witch: { hide: false },
    wizard: { hide: false },
    xbow: { hide: false },
    zap: { hide: false },
    zappies: { hide: false },
  };
  const arr = [
    'archers',
    'arrows',
    'babydragon',
    'balloon',
    'bandit',
    'barbarianbarrel',
    'barbarianhut',
    'barbarians',
    'bats',
    'battlehealer',
    'battleram',
    'bombtower',
    'bowler',
    'cannoncart',
    'cannon',
    'clone',
    'darkprince',
    'dartgoblin',
    'earthquake',
    'electrodragon',
    'electrogiant',
    'electrospirit',
    'electrowizard',
    'elitebarbarians',
    'elixircollector',
    'elixirgolem',
    'executioner',
    'firespirits',
    'fireball',
    'firecracker',
    'fisherman',
    'flyingmachine',
    'freeze',
    'furnace',
    'giantskeleton',
    'giantsnowball',
    'giant',
    'goblinbarrel',
    'goblincage',
    'goblingang',
    'goblingiant',
    'goblinhut',
    'goblins',
    'golem',
    'graveyard',
    'guards',
    'healspirit',
    'hogrider',
    'hunter',
    'icegolem',
    'icespirit',
    'icewizard',
    'infernodragon',
    'infernotower',
    'knight',
    'lavahound',
    'lightning',
    'lumberjack',
    'magicarcher',
    'megaknight',
    'megaminion',
    'miner',
    'minipekka',
    'minionhorde',
    'minions',
    'mirror',
    'mortar',
    'motherwitch',
    'pekka',
    'poison',
    'prince',
    'princess',
    'rage',
    'ramrider',
    'rascals',
    'rocket',
    'royaldelivery',
    'royalghost',
    'royalgiant',
    'royalhogs',
    'royalrecruits',
    'skeletonarmy',
    'skeletonbarrel',
    'skeletondragons',
    'skeletons',
    'sparky',
    'speargoblins',
    'tesla',
    'log',
    'threemusketeers',
    'tombstone',
    'tornado',
    'valkyrie',
    'wallbreakers',
    'witch',
    'wizard',
    'xbow',
    'zap',
    'zappies',
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const [hideCard, setHideCard] = useState({
    archers: { hide: false },
    arrows: { hide: false },
    babydragon: { hide: false },
    balloon: { hide: false },
    bandit: { hide: false },
    barbarianbarrel: { hide: false },
    barbarianhut: { hide: false },
    barbarians: { hide: false },
    bats: { hide: false },
    battlehealer: { hide: false },
    battleram: { hide: false },
    bombtower: { hide: false },
    bowler: { hide: false },
    cannoncart: { hide: false },
    cannon: { hide: false },
    clone: { hide: false },
    darkprince: { hide: false },
    dartgoblin: { hide: false },
    earthquake: { hide: false },
    electrodragon: { hide: false },
    electrogiant: { hide: false },
    electrospirit: { hide: false },
    electrowizard: { hide: false },
    elitebarbarians: { hide: false },
    elixircollector: { hide: false },
    elixirgolem: { hide: false },
    executioner: { hide: false },
    firespirits: { hide: false },
    fireball: { hide: false },
    firecracker: { hide: false },
    fisherman: { hide: false },
    flyingmachine: { hide: false },
    freeze: { hide: false },
    furnace: { hide: false },
    giantskeleton: { hide: false },
    giantsnowball: { hide: false },
    giant: { hide: false },
    goblinbarrel: { hide: false },
    goblincage: { hide: false },
    goblingang: { hide: false },
    goblingiant: { hide: false },
    goblinhut: { hide: false },
    goblins: { hide: false },
    golem: { hide: false },
    graveyard: { hide: false },
    guards: { hide: false },
    healspirit: { hide: false },
    hogrider: { hide: false },
    hunter: { hide: false },
    icegolem: { hide: false },
    icespirit: { hide: false },
    icewizard: { hide: false },
    infernodragon: { hide: false },
    infernotower: { hide: false },
    knight: { hide: false },
    lavahound: { hide: false },
    lightning: { hide: false },
    lumberjack: { hide: false },
    magicarcher: { hide: false },
    megaknight: { hide: false },
    megaminion: { hide: false },
    miner: { hide: false },
    minipekka: { hide: false },
    minionhorde: { hide: false },
    minions: { hide: false },
    mirror: { hide: false },
    mortar: { hide: false },
    motherwitch: { hide: false },
    pekka: { hide: false },
    poison: { hide: false },
    prince: { hide: false },
    princess: { hide: false },
    rage: { hide: false },
    ramrider: { hide: false },
    rascals: { hide: false },
    rocket: { hide: false },
    royaldelivery: { hide: false },
    royalghost: { hide: false },
    royalgiant: { hide: false },
    royalhogs: { hide: false },
    royalrecruits: { hide: false },
    skeletonarmy: { hide: false },
    skeletonbarrel: { hide: false },
    skeletondragons: { hide: false },
    skeletons: { hide: false },
    sparky: { hide: false },
    speargoblins: { hide: false },
    tesla: { hide: false },
    log: { hide: false },
    threemusketeers: { hide: false },
    tombstone: { hide: false },
    tornado: { hide: false },
    valkyrie: { hide: false },
    wallbreakers: { hide: false },
    witch: { hide: false },
    wizard: { hide: false },
    xbow: { hide: false },
    zap: { hide: false },
    zappies: { hide: false },
  });

  const onClick = (e) => {
    if (hideCard[e].hide === true) {
      let cur = { ...hideCard };
      cur[e].hide = false;
      setHideCard(cur);
    } else {
      let obj = { ...initial };
      let boolean = obj[e].hide;
      obj[e].hide = !boolean;
      setHideCard(obj);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.currentTarget.value);
  };

  return (
    <div className='App'>
      <Container>
        <form>
          <input onChange={handleInputChange} placeholder='Search' />
        </form>

        {searchQuery === '' ? (
          <Row>
            {arr.map((card, ind) => {
              return (
                <div>
                  <img
                    src={stockcards[card]}
                    alt=''
                    key={ind}
                    onClick={() => onClick(card)}
                  ></img>
                  {hideCard[card].hide && (
                    <StarLevel card={card} key={ind}></StarLevel>
                  )}
                </div>
              );
            })}
          </Row>
        ) : (
          <Row>
            {arr
              .filter((card) =>
                card
                  .toLocaleLowerCase()
                  .includes(searchQuery.toLocaleLowerCase())
              )
              .map((filtered, ind) => {
                return (
                  <div>
                    <img
                      src={stockcards[filtered]}
                      alt=''
                      key={ind}
                      onClick={() => onClick(filtered)}
                    ></img>
                    {hideCard[filtered].hide && (
                      <StarLevel card={filtered} key={ind}></StarLevel>
                    )}
                  </div>
                );
              })}
          </Row>
        )}
      </Container>
    </div>
  );
}
