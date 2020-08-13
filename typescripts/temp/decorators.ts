export function plan(target: Function) {

    console.log('target' + target);
    target.prototype.basic = true;
}


export function SilverPlan(member: string) {

    return function (target: Function) {
        target.prototype.member = member;
    }

}