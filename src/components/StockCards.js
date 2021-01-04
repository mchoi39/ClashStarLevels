import React, {useState} from 'react'
// import {Accordion, Card, Button} from 'react-bootstrap'
import StarCard from './StarCard'
import common from '../assets/'
import rare from '../assets/rare'
import epic from '../assets/epic'
import legendary from '../assets/legendary'
import stockcards from '../assets/stockcards'
import {Container, Row, Col } from 'react-bootstrap'


export default function StockCards() {
    const [hideCard, setHideCard] = useState({
      archers: {hide:false},
      arrows: {hide: false},
      babydragon: {hide:false},
      balloon: {hide:false},
      bandit: {hide:false},
      barbarianbarrel: {hide:false},
      barbarianhut: {hide:false},
      barbarians: {hide:false},
      bats: {hide:false},
      battlehealer: {hide:false},
      battleram: {hide:false},
      bombtower: {hide:false},
      bowler: {hide:false},
      cannoncart: {hide:false},
      cannon: {hide:false},
      clone: {hide:false},
      darkprince: {hide:false},
      dartgoblin: {hide:false},
      earthquake: {hide:false},
      electrodragon: {hide:false},
      electrogiant: {hide:false},
      electrospirit: {hide:false},
      electrowizard: {hide:false},
      elitebarbarians: {hide:false},
      elixircollector: {hide:false},
      elixirgolem: {hide:false},
      executioner: {hide:false},
      firespirits: {hide:false},
      fireball: {hide:false},
      firecracker: {hide:false},
      fisherman: {hide:false},
      flyingmachine: {hide:false},
      freeze: {hide:false},
      furnace: {hide:false},
      giantskeleton: {hide:false},
      giantsnowball: {hide:false},
      giant: {hide:false},
      goblinbarrel: {hide:false},
      goblincage: {hide:false},
      goblingang: {hide:false},
      goblingiant: {hide:false},
      goblinhut: {hide:false},
      goblins: {hide:false},
      golem: {hide:false},
      graveyard: {hide:false},
      guards: {hide:false},
      healspirit: {hide:false},
      hogrider: {hide:false},
      hunter: {hide:false},
      icegolem: {hide:false},
      icespirit: {hide:false},
      icewizard: {hide:false},
      infernodragon: {hide:false},
      infernotower: {hide:false},
      knight: {hide:false},
      lavahound: {hide:false},
      lightning: {hide:false},
      lumberjack: {hide:false},
      magicarcher: {hide:false},
      megaknight: {hide:false},
      megaminion: {hide:false},
      miner: {hide:false},
      minipekka: {hide:false},
      minionhorde: {hide:false},
      minions: {hide:false},
      mirror: {hide:false},
      mortar: {hide:false},
      motherwitch: {hide:false},
      pekka: {hide:false},
      poison: {hide:false},
      prince: {hide:false},
      princess: {hide:false},
      rage: {hide:false},
      ramrider: {hide:false},
      rascals: {hide:false},
      rocket: {hide:false},
      royaldelivery: {hide:false},
      royalghost: {hide:false},
      royalgiant: {hide:false},
      royalhogs: {hide:false},
      royalrecruits: {hide:false},
      skeletonarmy: {hide:false},
      skeletonbarrel: {hide:false},
      skeletondragons: {hide:false},
      skeletons: {hide: false},
      sparky: {hide:false},
      speargoblins: {hide:false},
      tesla: {hide:false},
      log: {hide:false},
      threemusketeers: {hide:false},
      tombstone: {hide:false},
      tornado: {hide:false},
      valkyrie: {hide:false},
      wallbreakers: {hide:false},
      witch: {hide:false},
      wizard: {hide:false},
      xbow: {hide:false},
      zap: {hide:false},
      zappies: {hide: false}

    })

    const onClick = (e) => {
      let obj = {...hideCard}
      let boolean = obj[e].hide
      obj[e].hide = !boolean
      setHideCard(obj)
    }

    return (
        <div className="App">
        <Container>
          {/* () => sethideSkeletons(!hideSkeletons) */}
          <img src={stockcards.arrows} alt="" onClick={() => onClick("arrows")}></img>
          <img src={stockcards.archers} alt="" onClick={() => onClick("archers")}></img>
          <img src={stockcards.babydragon} alt="" onClick={()=> onClick("babydragon")}></img>
          <img src={stockcards.balloon} alt="" onClick={()=> onClick("balloon")}></img>
          <img src={stockcards.bandit} alt="" onClick={()=> onClick("bandit")}></img>
          <img src={stockcards.barbarianbarrel} alt="" onClick={()=> onClick("barbarianbarrel")}></img>
          <img src={stockcards.barbarianhut} alt="" onClick={()=> onClick("barbarianhut")}></img>
          {hideCard.arrows.hide && <Row>
            <Col><StarCard card={common.arrows1}></StarCard></Col>
            <Col><StarCard card={common.arrows2}></StarCard></Col>
            <Col><StarCard card={common.arrows3}></StarCard></Col>
          </Row>}
          {hideCard.archers.hide && <Row>
            <Col><StarCard card={common.archerslvl2}></StarCard></Col>
          </Row>}
          {hideCard.babydragon.hide && <Row>
            <Col><StarCard card={epic.babydragon2}></StarCard></Col>
          </Row>}
          {hideCard.balloon.hide && <Row>
            <Col><StarCard card={epic.balloon2}></StarCard></Col>
            <Col><StarCard card={epic.balloon3}></StarCard></Col>
          </Row>}
          {hideCard.bandit.hide && <Row>
            <Col><StarCard card={legendary.bandit1}></StarCard></Col>
          </Row>}
          {hideCard.barbarianbarrel.hide && <Row>
            <Col><StarCard card={epic.barbarianbarrel2}></StarCard></Col>
          </Row>}
          {hideCard.barbarianhut.hide && <Row>
            <Col><StarCard card={rare.barbarianhut2}></StarCard></Col>
          </Row>}

          <img src={stockcards.barbarians} alt="" onClick={()=> onClick("barbarians")}></img>
          <img src={stockcards.bats} alt="" onClick={()=> onClick("bats")}></img>
          <img src={stockcards.battlehealer} alt="" onClick={()=> onClick("battlehealer")}></img>
          <img src={stockcards.battleram} alt="" onClick={()=> onClick("battleram")}></img>
          <img src={stockcards.bombtower} alt="" onClick={()=> onClick("bombtower")}></img>
          <img src={stockcards.bowler} alt="" onClick={()=> onClick("bowler")}></img>
          <img src={stockcards.cannoncart} alt="" onClick={()=> onClick("cannoncart")}></img>
          {hideCard.barbarians.hide && <Row>
            <Col><StarCard card={common.barbarians2}></StarCard></Col>
          </Row>}
          {hideCard.bats.hide && <Row>
            <Col><StarCard card={common.batslvl2}></StarCard></Col>
          </Row>}
          {hideCard.battlehealer.hide && <Row>
            <Col><StarCard card={rare.battlehealer1}></StarCard></Col>
          </Row>}
          {hideCard.battleram.hide && <Row>
            <Col><StarCard card={rare.battleram2}></StarCard></Col>
          </Row>}
          {hideCard.bowler.hide && <Row>
            <Col><StarCard card={epic.bowler2}></StarCard></Col>
          </Row>}
          {hideCard.cannoncart.hide && <Row>
            <Col><StarCard card={epic.cannoncart2}></StarCard></Col>
            <Col><StarCard card={epic.cannoncart3}></StarCard></Col>
          </Row>}

          <img src={stockcards.cannon} alt="" onClick={()=> onClick("cannon")}></img>
          <img src={stockcards.clone} alt="" onClick={()=> onClick("clone")}></img>
          <img src={stockcards.darkprince} alt="" onClick={()=> onClick("darkprince")}></img>
          <img src={stockcards.dartgoblin} alt="" onClick={()=> onClick("dartgoblin")}></img>
          <img src={stockcards.earthquake} alt="" onClick={()=> onClick("earthquake")}></img>
          <img src={stockcards.electrodragon} alt="" onClick={()=> onClick("electrodragon")}></img>
          <img src={stockcards.electrogiant} alt="" onClick={()=> onClick("electrogiant")}></img>

          {hideCard.cannon.hide && <Row>
            <Col><StarCard card={common.cannon2}></StarCard></Col>
            <Col><StarCard card={common.cannon3}></StarCard></Col>
          </Row>}

          {hideCard.clone.hide && <Row>
            <Col><StarCard card={epic.clone1}></StarCard></Col>
          </Row>}
          
          {hideCard.darkprince.hide && <Row>
            <Col><StarCard card={epic.darkprince1}></StarCard></Col>
          </Row>}

          {hideCard.dartgoblin.hide && <Row>
            <Col><StarCard card={rare.dartgoblin2}></StarCard></Col>
          </Row>}

          {hideCard.earthquake.hide && <Row>
            <Col><StarCard card={rare.earthquake1}></StarCard></Col>
            <Col><StarCard card={rare.earthquake2}></StarCard></Col>
            <Col><StarCard card={rare.earthquake3}></StarCard></Col>
          </Row>}
          
          {hideCard.electrodragon.hide && <Row>
            <Col><StarCard card={epic.electrodragon1}></StarCard></Col>
          </Row>}
          

          <img src={stockcards.electrospirit} alt="" onClick={()=> onClick("electrospirit")}></img>
          <img src={stockcards.electrowizard} alt="" onClick={()=> onClick("electrowizard")}></img>
          <img src={stockcards.elitebarbarians} alt="" onClick={()=> onClick("elitebarbarians")}></img>
          <img src={stockcards.elixircollector} alt="" onClick={()=> onClick("elixircollector")}></img>
          <img src={stockcards.elixirgolem} alt="" onClick={()=> onClick("elixirgolem")}></img>
          <img src={stockcards.executioner} alt="" onClick={()=> onClick("executioner")}></img>
          <img src={stockcards.firespirits} alt="" onClick={()=> onClick("firespirits")}></img>
          {hideCard.electrowizard.hide && <Row>
            <Col><StarCard card={legendary.electrowizard1}></StarCard></Col>
          </Row>}
          {hideCard.elitebarbarians.hide && <Row>
            <Col><StarCard card={common.elitebarbarians2}></StarCard></Col>
          </Row>}
          {hideCard.elixircollector.hide && <Row>
            <Col><StarCard card={rare.elixircollector2}></StarCard></Col>
          </Row>}
          {hideCard.elixirgolem.hide && <Row>
            <Col><StarCard card={rare.elixirgolem1}></StarCard></Col>
          </Row>}
          {hideCard.executioner.hide && <Row>
            <Col><StarCard card={epic.executioner2}></StarCard></Col>
          </Row>}
          {hideCard.firespirits.hide && <Row>
            <Col><StarCard card={common.firespiritslvl1}></StarCard></Col>
          </Row>}


          <img src={stockcards.fireball} alt="" onClick={()=> onClick("fireball")}></img>
          <img src={stockcards.firecracker} alt="" onClick={()=> onClick("firecracker")}></img>
          <img src={stockcards.fisherman} alt="" onClick={()=> onClick("fisherman")}></img>
          <img src={stockcards.flyingmachine} alt="" onClick={()=> onClick("flyingmachine")}></img>
          <img src={stockcards.freeze} alt="" onClick={()=> onClick("freeze")}></img>
          <img src={stockcards.furnace} alt="" onClick={()=> onClick("furnace")}></img>
          <img src={stockcards.giantskeleton} alt="" onClick={()=> onClick("giantskeleton")}></img>

          {hideCard.fireball.hide && <Row>
            <Col><StarCard card={rare.fireball1}></StarCard></Col>
            <Col><StarCard card={rare.fireball2}></StarCard></Col>
          </Row>}
          {hideCard.firecracker.hide && <Row>
            <Col><StarCard card={common.firecrackerlvl1}></StarCard></Col>
          </Row>}
          {hideCard.fisherman.hide && <Row>
            <Col><StarCard card={legendary.fisherman1}></StarCard></Col>
          </Row>}
          {hideCard.flyingmachine.hide && <Row>
            <Col><StarCard card={rare.flyingmachine1}></StarCard></Col>
          </Row>}
          {hideCard.freeze.hide && <Row>
            <Col><StarCard card={epic.freeze1}></StarCard></Col>
          </Row>}
          {hideCard.furnace.hide && <Row>
            <Col><StarCard card={rare.furnace1}></StarCard></Col>
          </Row>}
          {hideCard.giantskeleton.hide && <Row>
            <Col><StarCard card={epic.giantskeleton2}></StarCard></Col>
            <Col><StarCard card={epic.giantskeleton3}></StarCard></Col>
          </Row>}

          <img src={stockcards.giantsnowball} alt="" onClick={()=> onClick("giantsnowball")}></img>
          <img src={stockcards.giant} alt="" onClick={()=> onClick("giant")}></img>
          <img src={stockcards.goblinbarrel} alt="" onClick={()=> onClick("goblinbarrel")}></img>
          <img src={stockcards.goblincage} alt="" onClick={()=> onClick("goblincage")}></img>
          <img src={stockcards.goblingang} alt="" onClick={()=> onClick("goblingang")}></img>
          <img src={stockcards.goblingiant} alt="" onClick={()=> onClick("goblingiant")}></img>
          <img src={stockcards.goblinhut} alt="" onClick={()=> onClick("goblinhut")}></img>
          {hideCard.giantsnowball.hide && <Row>
            <Col><StarCard card={common.giantsnowballlvl1}></StarCard></Col>
          </Row>}
          {hideCard.giant.hide && <Row>
            <Col><StarCard card={rare.giant2}></StarCard></Col>
          </Row>}
          {hideCard.goblinbarrel.hide && <Row>
            <Col><StarCard card={epic.goblinbarrel2}></StarCard></Col>
            <Col><StarCard card={epic.goblinbarrel3}></StarCard></Col>
          </Row>}
          {hideCard.goblincage.hide && <Row>
            <Col><StarCard card={rare.goblincage2}></StarCard></Col>
            <Col><StarCard card={rare.goblincage3}></StarCard></Col>
          </Row>}
          {hideCard.goblingiant.hide && <Row>
            <Col><StarCard card={epic.goblingiant2}></StarCard></Col>
            <Col><StarCard card={epic.goblingiant3}></StarCard></Col>
          </Row>}
          {hideCard.goblinhut.hide && <Row>
            <Col><StarCard card={rare.goblinhut2}></StarCard></Col>
            <Col><StarCard card={rare.goblinhut3}></StarCard></Col>
          </Row>}

          <img src={stockcards.goblins} alt="" onClick={()=> onClick("goblins")}></img>
          <img src={stockcards.golem} alt="" onClick={()=> onClick("golem")}></img>
          <img src={stockcards.graveyard} alt="" onClick={()=> onClick("graveyard")}></img>
          <img src={stockcards.guards} alt="" onClick={()=> onClick("guards")}></img>
          <img src={stockcards.healspirit} alt="" onClick={()=> onClick("healspirit")}></img>
          <img src={stockcards.hogrider} alt="" onClick={()=> onClick("hogrider")}></img>
          <img src={stockcards.hunter} alt="" onClick={()=> onClick("hunter")}></img>

          {hideCard.goblins.hide && <Row>
            <Col><StarCard card={common.goblinslvl2}></StarCard></Col>
            <Col><StarCard card={common.goblinslvl3}></StarCard></Col>
          </Row>}
          {hideCard.golem.hide && <Row>
            <Col><StarCard card={epic.golem2}></StarCard></Col>
          </Row>}
          {hideCard.graveyard.hide && <Row>
            <Col><StarCard card={legendary.graveyard2}></StarCard></Col>
            <Col><StarCard card={legendary.graveyard3}></StarCard></Col>
          </Row>}
          {hideCard.guards.hide && <Row>
            <Col><StarCard card={epic.guards2}></StarCard></Col>
          </Row>}
          {hideCard.hogrider.hide && <Row>
            <Col><StarCard card={rare.hogrider2}></StarCard></Col>
            <Col><StarCard card={rare.hogrider3}></StarCard></Col>
          </Row>}
          {hideCard.hunter.hide && <Row>
            <Col><StarCard card={epic.hunter2}></StarCard></Col>
            <Col><StarCard card={epic.hunter3}></StarCard></Col>
          </Row>}

          
          <img src={stockcards.icegolem} alt="" onClick={()=> onClick("icegolem")}></img>
          <img src={stockcards.icespirit} alt="" onClick={()=> onClick("icespirit")}></img>
          <img src={stockcards.icewizard} alt="" onClick={()=> onClick("icewizard")}></img>
          <img src={stockcards.infernodragon} alt="" onClick={()=> onClick("infernodragon")}></img>
          <img src={stockcards.infernotower} alt="" onClick={()=> onClick("infernotower")}></img>
          <img src={stockcards.knight} alt="" onClick={()=> onClick("knight")}></img>
          <img src={stockcards.lavahound} alt="" onClick={()=> onClick("lavahound")}></img>

          {hideCard.icegolem.hide && <Row>
            <Col><StarCard card={rare.icegolem1}></StarCard></Col>
          </Row>}
          {hideCard.icespirit.hide && <Row>
            <Col><StarCard card={common.icespiritlvl1}></StarCard></Col>
          </Row>}
          {hideCard.icewizard.hide && <Row>
            <Col><StarCard card={legendary.icewizard1}></StarCard></Col>
          </Row>}
          {hideCard.infernodragon.hide && <Row>
            <Col><StarCard card={legendary.infernodragon2}></StarCard></Col>
            <Col><StarCard card={legendary.infernodragon3}></StarCard></Col>
          </Row>}
          {hideCard.infernotower.hide && <Row>
            <Col><StarCard card={rare.infernotower2}></StarCard></Col>
          </Row>}
          {hideCard.knight.hide && <Row>
            <Col><StarCard card={common.knightlvl2}></StarCard></Col>
            <Col><StarCard card={common.knightlvl3}></StarCard></Col>
          </Row>}
          {hideCard.lavahound.hide && <Row>
            <Col><StarCard card={legendary.lavahound2}></StarCard></Col>
          </Row>}


          <img src={stockcards.lightning} alt="" onClick={()=> onClick("lightning")}></img>
          <img src={stockcards.lumberjack} alt="" onClick={()=> onClick("lumberjack")}></img>
          <img src={stockcards.magicarcher} alt="" onClick={()=> onClick("magicarcher")}></img>
          <img src={stockcards.megaknight} alt="" onClick={()=> onClick("megaknight")}></img>
          <img src={stockcards.megaminion} alt="" onClick={()=> onClick("megaminion")}></img>
          <img src={stockcards.miner} alt="" onClick={()=> onClick("miner")}></img>
          <img src={stockcards.minipekka} alt="" onClick={()=> onClick("minipekka")}></img>

          {hideCard.lumberjack.hide && <Row>
            <Col><StarCard card={legendary.lumberjack1}></StarCard></Col>
          </Row>}
          {hideCard.magicarcher.hide && <Row>
            <Col><StarCard card={legendary.magicarcher2}></StarCard></Col>
            <Col><StarCard card={legendary.magicarcher3}></StarCard></Col>
          </Row>}
          {hideCard.megaknight.hide && <Row>
            <Col><StarCard card={legendary.megaknight2}></StarCard></Col>
          </Row>}
          {hideCard.megaminion.hide && <Row>
            <Col><StarCard card={rare.megaminion2}></StarCard></Col>
          </Row>}
          {hideCard.miner.hide && <Row>
            <Col><StarCard card={legendary.miner2}></StarCard></Col>
          </Row>}
          {hideCard.minipekka.hide && <Row>
            <Col><StarCard card={rare.minipekka2}></StarCard></Col>
          </Row>}



          <img src={stockcards.minionhorde} alt="" onClick={()=> onClick("minionhorde")}></img>
          <img src={stockcards.minions} alt="" onClick={()=> onClick("minions")}></img>
          <img src={stockcards.mortar} alt="" onClick={()=> onClick("mortar")}></img>
          <img src={stockcards.motherwitch} alt="" onClick={()=> onClick("motherwitch")}></img>
          <img src={stockcards.pekka} alt="" onClick={()=> onClick("pekka")}></img>
          <img src={stockcards.poison} alt="" onClick={()=> onClick("poison")}></img>
          <img src={stockcards.prince} alt="" onClick={()=> onClick("prince")}></img>

          {hideCard.minions.hide && <Row>
            <Col><StarCard card={common.minionslvl2}></StarCard></Col>
            <Col><StarCard card={common.minionslvl3}></StarCard></Col>
          </Row>}
          {hideCard.mortar.hide && <Row>
            <Col><StarCard card={common.mortar2}></StarCard></Col>
          </Row>}
          {hideCard.pekka.hide && <Row>
            <Col><StarCard card={epic.pekka2}></StarCard></Col>
          </Row>}
          {hideCard.poison.hide && <Row>
            <Col><StarCard card={epic.poison1}></StarCard></Col>
          </Row>}
          {hideCard.prince.hide && <Row>
            <Col><StarCard card={epic.prince1}></StarCard></Col>
          </Row>}

          <img src={stockcards.princess} alt="" onClick={()=> onClick("princess")}></img>
          <img src={stockcards.rage} alt="" onClick={()=> onClick("rage")}></img>
          <img src={stockcards.ramrider} alt="" onClick={()=> onClick("ramrider")}></img>
          <img src={stockcards.rascals} alt="" onClick={()=> onClick("rascals")}></img>
          <img src={stockcards.rocket} alt="" onClick={()=> onClick("rocket")}></img>
          <img src={stockcards.royaldelivery} alt="" onClick={()=> onClick("royaldelivery")}></img>
          <img src={stockcards.royalghost} alt="" onClick={()=> onClick("royalghost")}></img>
          {hideCard.princess.hide && <Row>
            <Col><StarCard card={legendary.princess1}></StarCard></Col>
          </Row>}
          {hideCard.rage.hide && <Row>
            <Col><StarCard card={epic.rage1}></StarCard></Col>
          </Row>}
          {hideCard.ramrider.hide && <Row>
            <Col><StarCard card={legendary.ramrider1}></StarCard></Col>
          </Row>}
          {hideCard.rascals.hide && <Row>
            <Col><StarCard card={common.rascals2}></StarCard></Col>
          </Row>}
          {hideCard.rocket.hide && <Row>
            <Col><StarCard card={rare.rocket1}></StarCard></Col>
            <Col><StarCard card={rare.rocket2}></StarCard></Col>
            <Col><StarCard card={rare.rocket3}></StarCard></Col>
          </Row>}
          {hideCard.royalghost.hide && <Row>
            <Col><StarCard card={legendary.royalghost1}></StarCard></Col>
          </Row>}
          

          <img src={stockcards.royalgiant} alt="" onClick={()=> onClick("royalgiant")}></img>
          <img src={stockcards.royalhogs} alt="" onClick={()=> onClick("royalhogs")}></img>
          <img src={stockcards.royalrecruits} alt="" onClick={()=> onClick("royalrecruits")}></img>
          <img src={stockcards.skeletonarmy} alt="" onClick={()=> onClick("skeletonarmy")}></img>
          <img src={stockcards.skeletonbarrel} alt="" onClick={()=> onClick("skeletonbarrel")}></img>
          <img src={stockcards.skeletondragons} alt="" onClick={()=> onClick("skeletondragons")}></img>
          <img src={stockcards.skeletons} alt="" onClick={()=> onClick("skeletons")}></img>
          {hideCard.royalgiant.hide && <Row>
            <Col><StarCard card={common.royalgiant2}></StarCard></Col>
          </Row>}
          {hideCard.royalhogs.hide && <Row>
            <Col><StarCard card={rare.royalhogs2}></StarCard></Col>
          </Row>}
          {hideCard.royalrecruits.hide && <Row>
            <Col><StarCard card={common.royalrecruits2}></StarCard></Col>
          </Row>}
          {hideCard.skeletonarmy.hide && <Row>
            <Col><StarCard card={epic.skarmy2}></StarCard></Col>
            <Col><StarCard card={epic.skarmy3}></StarCard></Col>
          </Row>}
          {hideCard.skeletonbarrel.hide && <Row>
            <Col><StarCard card={common.skeletonbarrellvl2}></StarCard></Col>
            <Col><StarCard card={common.skeletonbarrellvl3}></StarCard></Col>
          </Row>}
          {hideCard.skeletons.hide && <Row>
            <Col><StarCard card={common.skeletonslvl2}></StarCard></Col>
            <Col><StarCard card={common.skeletonslvl3}></StarCard></Col>
          </Row>}




          <img src={stockcards.sparky} alt="" onClick={()=> onClick("sparky")}></img>
          <img src={stockcards.speargoblins} alt="" onClick={()=> onClick("speargoblins")}></img>
          <img src={stockcards.tesla} alt="" onClick={()=> onClick("tesla")}></img>
          <img src={stockcards.thelog} alt="" onClick={()=> onClick("log")}></img>
          <img src={stockcards.threemusketeers} alt="" onClick={()=> onClick("threemusketeers")}></img>
          <img src={stockcards.tombstone} alt="" onClick={()=> onClick("tombstone")}></img>
          <img src={stockcards.tornado} alt="" onClick={()=> onClick("tornado")}></img>

          {hideCard.sparky.hide && <Row>
            <Col><StarCard card={legendary.sparky1}></StarCard></Col>
          </Row>}
          {hideCard.speargoblins.hide && <Row>
            <Col><StarCard card={common.speargoblinslvl2}></StarCard></Col>
            <Col><StarCard card={common.speargoblinslvl3}></StarCard></Col>
          </Row>}
          {hideCard.tesla.hide && <Row>
            <Col><StarCard card={common.tesla2}></StarCard></Col>
          </Row>}
          {hideCard.log.hide && <Row>
            <Col><StarCard card={legendary.log1}></StarCard></Col>
          </Row>}
          {hideCard.tombstone.hide && <Row>
            <Col><StarCard card={rare.tombstone2}></StarCard></Col>
          </Row>}
          {hideCard.tornado.hide && <Row>
            <Col><StarCard card={epic.tornado1}></StarCard></Col>
          </Row>}


          <img src={stockcards.valkyrie} alt="" onClick={()=> onClick("valkyrie")}></img>
          <img src={stockcards.wallbreakers} alt="" onClick={()=> onClick("wallbreakers")}></img>
          <img src={stockcards.witch} alt="" onClick={()=> onClick("witch")}></img>
          <img src={stockcards.wizard} alt="" onClick={()=> onClick("wizard")}></img>
          <img src={stockcards.xbow} alt="" onClick={()=> onClick("xbow")}></img>
          <img src={stockcards.zap} alt="" onClick={()=> onClick("zap")}></img>
          <img src={stockcards.zappies} alt="" onClick={()=> onClick("zappies")}></img>

          {hideCard.valkyrie.hide && <Row>
            <Col><StarCard card={rare.valkyrie2}></StarCard></Col>
          </Row>}
          {hideCard.wallbreakers.hide && <Row>
            <Col><StarCard card={epic.wallbreakers2}></StarCard></Col>
            <Col><StarCard card={epic.wallbreakers3}></StarCard></Col>
          </Row>}
          {hideCard.witch.hide && <Row>
            <Col><StarCard card={epic.witch2}></StarCard></Col>
          </Row>}
          {hideCard.wizard.hide && <Row>
            <Col><StarCard card={rare.wizard2}></StarCard></Col>
          </Row>}
          {hideCard.xbow.hide && <Row>
            <Col><StarCard card={epic.xbow2}></StarCard></Col>
            <Col><StarCard card={epic.xbow3}></StarCard></Col>
          </Row>}
          {hideCard.zap.hide && <Row>
            <Col><StarCard card={common.zaplvl1}></StarCard></Col>
          </Row>}
          {hideCard.zappies.hide && <Row>
            <Col><StarCard card={rare.zappies2}></StarCard></Col>
          </Row>}

          
        </Container>
  
        
      </div>
    )
}
