import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StarCard from './StarCard';
import common from '../assets/index';
import rare from '../assets/rare';
import epic from '../assets/epic';
import legendary from '../assets/legendary';

export default function StarLevel(props) {
  switch (props.card) {
    case 'arrows':
      return (
        <Row>
          <Col>
            <StarCard card={common.arrows1}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.arrows2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.arrows3}></StarCard>
          </Col>
        </Row>
      );
    case 'archers':
      return (
        <Row>
          <Col>
            <StarCard card={common.archerslvl2}></StarCard>
          </Col>
        </Row>
      );
    case 'babydragon':
      return (
        <Row>
          <Col>
            <StarCard card={epic.babydragon2}></StarCard>
          </Col>
        </Row>
      );
    case 'balloon':
      return (
        <Row>
          <Col>
            <StarCard card={epic.balloon2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.balloon3}></StarCard>
          </Col>
        </Row>
      );
    case 'bandit':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.bandit1}></StarCard>
          </Col>
        </Row>
      );
    case 'barbarianbarrel':
      return (
        <Row>
          <Col>
            <StarCard card={epic.barbarianbarrel2}></StarCard>
          </Col>
        </Row>
      );
    case 'barbarianhut':
      return (
        <Row>
          <Col>
            <StarCard card={rare.barbarianhut2}></StarCard>
          </Col>
        </Row>
      );
    case 'barbarians':
      return (
        <Row>
          <Col>
            <StarCard card={common.barbarians2}></StarCard>
          </Col>
        </Row>
      );
    case 'bats':
      return (
        <Row>
          <Col>
            <StarCard card={common.batslvl2}></StarCard>
          </Col>
        </Row>
      );
    case 'battlehealer':
      return (
        <Row>
          <Col>
            <StarCard card={rare.battlehealer1}></StarCard>
          </Col>
        </Row>
      );
    case 'battleram':
      return (
        <Row>
          <Col>
            <StarCard card={rare.battleram2}></StarCard>
          </Col>
        </Row>
      );
    case 'bowler':
      return (
        <Row>
          <Col>
            <StarCard card={epic.bowler2}></StarCard>
          </Col>
        </Row>
      );
    case 'cannoncart':
      return (
        <Row>
          <Col>
            <StarCard card={epic.cannoncart2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.cannoncart3}></StarCard>
          </Col>
        </Row>
      );
    case 'cannon':
      return (
        <Row>
          <Col>
            <StarCard card={common.cannon2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.cannon3}></StarCard>
          </Col>
        </Row>
      );
    case 'clone':
      return (
        <Row>
          <Col>
            <StarCard card={epic.clone1}></StarCard>
          </Col>
        </Row>
      );
    case 'darkprince':
      return (
        <Row>
          <Col>
            <StarCard card={epic.darkprince1}></StarCard>
          </Col>
        </Row>
      );
    case 'dartgoblin':
      return (
        <Row>
          <Col>
            <StarCard card={rare.dartgoblin2}></StarCard>
          </Col>
        </Row>
      );
    case 'earthquake':
      return (
        <Row>
          <Col>
            <StarCard card={rare.earthquake1}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.earthquake2}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.earthquake3}></StarCard>
          </Col>
        </Row>
      );
    case 'electrodragon':
      return (
        <Row>
          <Col>
            <StarCard card={epic.electrodragon1}></StarCard>
          </Col>
        </Row>
      );
    case 'electrowizard':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.electrowizard1}></StarCard>
          </Col>
        </Row>
      );
    case 'elitebarbarians':
      return (
        <Row>
          <Col>
            <StarCard card={common.elitebarbarians2}></StarCard>
          </Col>
        </Row>
      );
    case 'elixircollector':
      return (
        <Row>
          <Col>
            <StarCard card={rare.elixircollector2}></StarCard>
          </Col>
        </Row>
      );
    case 'elixirgolem':
      return (
        <Row>
          <Col>
            <StarCard card={rare.elixirgolem1}></StarCard>
          </Col>
        </Row>
      );
    case 'executioner':
      return (
        <Row>
          <Col>
            <StarCard card={epic.executioner2}></StarCard>
          </Col>
        </Row>
      );
    case 'firespirits':
      return (
        <Row>
          <Col>
            <StarCard card={common.firespiritslvl1}></StarCard>
          </Col>
        </Row>
      );
    case 'fireball':
      return (
        <Row>
          <Col>
            <StarCard card={rare.fireball1}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.fireball2}></StarCard>
          </Col>
        </Row>
      );
    case 'firecracker':
      return (
        <Row>
          <Col>
            <StarCard card={common.firecrackerlvl1}></StarCard>
          </Col>
        </Row>
      );
    case 'fisherman':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.fisherman1}></StarCard>
          </Col>
        </Row>
      );
    case 'flyingmachine':
      return (
        <Row>
          <Col>
            <StarCard card={rare.flyingmachine1}></StarCard>
          </Col>
        </Row>
      );
    case 'freeze':
      return (
        <Row>
          <Col>
            <StarCard card={epic.freeze1}></StarCard>
          </Col>
        </Row>
      );
    case 'furnace':
      return (
        <Row>
          <Col>
            <StarCard card={rare.furnace1}></StarCard>
          </Col>
        </Row>
      );
    case 'giantskeleton':
      return (
        <Row>
          <Col>
            <StarCard card={epic.giantskeleton2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.giantskeleton3}></StarCard>
          </Col>
        </Row>
      );
    case 'giantsnowball':
      return (
        <Row>
          <Col>
            <StarCard card={common.giantsnowballlvl1}></StarCard>
          </Col>
        </Row>
      );
    case 'giant':
      return (
        <Row>
          <Col>
            <StarCard card={rare.giant2}></StarCard>
          </Col>
        </Row>
      );
    case 'goblinbarrel':
      return (
        <Row>
          <Col>
            <StarCard card={epic.goblinbarrel2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.goblinbarrel3}></StarCard>
          </Col>
        </Row>
      );
    case 'goblincage':
      return (
        <Row>
          <Col>
            <StarCard card={rare.goblincage2}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.goblincage3}></StarCard>
          </Col>
        </Row>
      );
    case 'goblingiant':
      return (
        <Row>
          <Col>
            <StarCard card={epic.goblingiant2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.goblingiant3}></StarCard>
          </Col>
        </Row>
      );

    case 'goblinhut':
      return (
        <Row>
          <Col>
            <StarCard card={rare.goblinhut2}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.goblinhut3}></StarCard>
          </Col>
        </Row>
      );
    case 'goblins':
      return (
        <Row>
          <Col>
            <StarCard card={common.goblinslvl2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.goblinslvl3}></StarCard>
          </Col>
        </Row>
      );
    case 'golem':
      return (
        <Row>
          <Col>
            <StarCard card={epic.golem2}></StarCard>
          </Col>
        </Row>
      );
    case 'graveyard':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.graveyard2}></StarCard>
          </Col>
          <Col>
            <StarCard card={legendary.graveyard3}></StarCard>
          </Col>
        </Row>
      );
    case 'guards':
      return (
        <Row>
          <Col>
            <StarCard card={epic.guards2}></StarCard>
          </Col>
        </Row>
      );
    case 'hogrider':
      return (
        <Row>
          <Col>
            <StarCard card={rare.hogrider2}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.hogrider3}></StarCard>
          </Col>
        </Row>
      );
    case 'hunter':
      return (
        <Row>
          <Col>
            <StarCard card={epic.hunter2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.hunter3}></StarCard>
          </Col>
        </Row>
      );
    case 'icegolem':
      return (
        <Row>
          <Col>
            <StarCard card={rare.icegolem1}></StarCard>
          </Col>
        </Row>
      );
    case 'icespirit':
      return (
        <Row>
          <Col>
            <StarCard card={common.icespiritlvl1}></StarCard>
          </Col>
        </Row>
      );
    case 'icewizard':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.icewizard1}></StarCard>
          </Col>
        </Row>
      );
    case 'infernodragon':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.infernodragon2}></StarCard>
          </Col>
          <Col>
            <StarCard card={legendary.infernodragon3}></StarCard>
          </Col>
        </Row>
      );
    case 'infernotower':
      return (
        <Row>
          <Col>
            <StarCard card={rare.infernotower2}></StarCard>
          </Col>
        </Row>
      );
    case 'knight':
      return (
        <Row>
          <Col>
            <StarCard card={common.knightlvl2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.knightlvl3}></StarCard>
          </Col>
        </Row>
      );
    case 'lavahound':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.lavahound2}></StarCard>
          </Col>
        </Row>
      );
    case 'lumberjack':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.lumberjack1}></StarCard>
          </Col>
        </Row>
      );
    case 'magicarcher':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.magicarcher2}></StarCard>
          </Col>
          <Col>
            <StarCard card={legendary.magicarcher3}></StarCard>
          </Col>
        </Row>
      );
    case 'megaknight':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.megaknight2}></StarCard>
          </Col>
        </Row>
      );
    case 'megaminion':
      return (
        <Row>
          <Col>
            <StarCard card={rare.megaminion2}></StarCard>
          </Col>
        </Row>
      );
    case 'miner':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.miner2}></StarCard>
          </Col>
        </Row>
      );
    case 'minipekka':
      return (
        <Row>
          <Col>
            <StarCard card={rare.minipekka2}></StarCard>
          </Col>
        </Row>
      );
    case 'minions':
      return (
        <Row>
          <Col>
            <StarCard card={common.minionslvl2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.minionslvl3}></StarCard>
          </Col>
        </Row>
      );
    case 'mortar':
      return (
        <Row>
          <Col>
            <StarCard card={common.mortar2}></StarCard>
          </Col>
        </Row>
      );
    case 'pekka':
      return (
        <Row>
          <Col>
            <StarCard card={epic.pekka2}></StarCard>
          </Col>
        </Row>
      );
    case 'poison':
      return (
        <Row>
          <Col>
            <StarCard card={epic.poison1}></StarCard>
          </Col>
        </Row>
      );
    case 'prince':
      return (
        <Row>
          <Col>
            <StarCard card={epic.prince1}></StarCard>
          </Col>
        </Row>
      );
    case 'princess':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.princess1}></StarCard>
          </Col>
        </Row>
      );
    case 'rage':
      return (
        <Row>
          <Col>
            <StarCard card={epic.rage1}></StarCard>
          </Col>
        </Row>
      );
    case 'ramrider':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.ramrider1}></StarCard>
          </Col>
        </Row>
      );
    case 'rascals':
      return (
        <Row>
          <Col>
            <StarCard card={common.rascals2}></StarCard>
          </Col>
        </Row>
      );
    case 'rocket':
      return (
        <Row>
          <Col>
            <StarCard card={rare.rocket1}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.rocket2}></StarCard>
          </Col>
          <Col>
            <StarCard card={rare.rocket3}></StarCard>
          </Col>
        </Row>
      );
    case 'royalghost':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.royalghost1}></StarCard>
          </Col>
        </Row>
      );
    case 'royalgiant':
      return (
        <Row>
          <Col>
            <StarCard card={common.royalgiant2}></StarCard>
          </Col>
        </Row>
      );
    case 'royalhogs':
      return (
        <Row>
          <Col>
            <StarCard card={rare.royalhogs2}></StarCard>
          </Col>
        </Row>
      );
    case 'royalrecruits':
      return (
        <Row>
          <Col>
            <StarCard card={common.royalrecruits2}></StarCard>
          </Col>
        </Row>
      );
    case 'skeletonarmy':
      return (
        <Row>
          <Col>
            <StarCard card={epic.skarmy2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.skarmy3}></StarCard>
          </Col>
        </Row>
      );
    case 'skeletonbarrel':
      return (
        <Row>
          <Col>
            <StarCard card={common.skeletonbarrellvl2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.skeletonbarrellvl3}></StarCard>
          </Col>
        </Row>
      );
    case 'skeletons':
      return (
        <Row>
          <Col>
            <StarCard card={common.skeletonslvl2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.skeletonslvl3}></StarCard>
          </Col>
        </Row>
      );
    case 'sparky':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.sparky1}></StarCard>
          </Col>
        </Row>
      );
    case 'speargoblins':
      return (
        <Row>
          <Col>
            <StarCard card={common.speargoblinslvl2}></StarCard>
          </Col>
          <Col>
            <StarCard card={common.speargoblinslvl3}></StarCard>
          </Col>
        </Row>
      );
    case 'tesla':
      return (
        <Row>
          <Col>
            <StarCard card={common.tesla2}></StarCard>
          </Col>
        </Row>
      );
    case 'log':
      return (
        <Row>
          <Col>
            <StarCard card={legendary.log1}></StarCard>
          </Col>
        </Row>
      );
    case 'tombstone':
      return (
        <Row>
          <Col>
            <StarCard card={rare.tombstone2}></StarCard>
          </Col>
        </Row>
      );
    case 'tornado':
      return (
        <Row>
          <Col>
            <StarCard card={epic.tornado1}></StarCard>
          </Col>
        </Row>
      );
    case 'valkyrie':
      return (
        <Row>
          <Col>
            <StarCard card={rare.valkyrie2}></StarCard>
          </Col>
        </Row>
      );
    case 'wallbreakers':
      return (
        <Row>
          <Col>
            <StarCard card={epic.wallbreakers2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.wallbreakers3}></StarCard>
          </Col>
        </Row>
      );
    case 'witch':
      return (
        <Row>
          <Col>
            <StarCard card={epic.witch2}></StarCard>
          </Col>
        </Row>
      );
    case 'wizard':
      return (
        <Row>
          <Col>
            <StarCard card={rare.wizard2}></StarCard>
          </Col>
        </Row>
      );
    case 'xbow':
      return (
        <Row>
          <Col>
            <StarCard card={epic.xbow2}></StarCard>
          </Col>
          <Col>
            <StarCard card={epic.xbow3}></StarCard>
          </Col>
        </Row>
      );
    case 'zap':
      return (
        <Row>
          <Col>
            <StarCard card={common.zaplvl1}></StarCard>
          </Col>
        </Row>
      );
    case 'zappies':
      return (
        <Row>
          <Col>
            <StarCard card={rare.zappies2}></StarCard>
          </Col>
        </Row>
      );
    default:
      return <p>No star levels</p>;
  }
}
