/**
 * 状态类
 */

import FSMState, { StateID, Transition } from "../FSMFramework/FSMState";
import FSMSystem from "../FSMFramework/FSMSystem";

export default class patrolState extends FSMState {

    public count: number = 0;

    constructor(fsm: FSMSystem) {
        super(fsm);
        this.stateID = StateID.Patrol;
    }

    public Act(npc: cc.Node): void {
        console.log("巡逻", this.count);
        this.count++;
    }

    public Reason(npc: cc.Node): void {
        if (this.count > 10) {
            this.fsm.performTransition(Transition.SeePlayer);
        }
    }

    public DoBeforeEntering(): void {

    }

    public DoAfterLeaving(): void {
        this.count = 0;
    }

}
