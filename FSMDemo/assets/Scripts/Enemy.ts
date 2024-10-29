import FSMState, { StateID, Transition } from "../FSMFramework/FSMState";
import FSMSystem from "../FSMFramework/FSMSystem";
import chaseState from "./chaseState";
import patrolState from "./patrolState";

//控制器类
const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {

    private fsm:FSMSystem;

    // onLoad () {}

    start () {
        this.initFSM();
    }

    update (dt) {
        this.fsm.onState(this.node);
    }

    public initFSM(){
        this.fsm = new FSMSystem();
        let patrol = new patrolState(this.fsm);
        patrol.addTransition(Transition.SeePlayer,StateID.Chase);
        let chase = new chaseState(this.fsm);
        chase.addTransition(Transition.LostPlayer,StateID.Patrol);
        this.fsm.addState(patrol);
        this.fsm.addState(chase);
    }
}
