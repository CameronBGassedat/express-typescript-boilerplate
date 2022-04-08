export class Range {
    constructor(public inRange: number[], public outRange: number[], public unit : string) {
      this.inRange = inRange;
      this.outRange = outRange;
      this.unit = unit;
    }
}
