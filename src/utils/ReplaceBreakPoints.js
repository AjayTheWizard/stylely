function ReplaceBreakPoints(rule, breakPoints) {
  rule.params = "(min-width:" + breakPoints[rule.name] + ")";
  rule.name = "media";
}
module.exports.ReplaceBreakPoints = ReplaceBreakPoints;
