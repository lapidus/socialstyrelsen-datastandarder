const ddf = require("ddf-validation");
const download = require("download-git-repo");

export default (req, res) => {
  console.log("testing download");

  download("lapidus/socialstyrelsen-datastandarder", "/tmp/repo", function(
    err
  ) {
    console.log(err ? "Error" : "Success");

    const StreamValidator = ddf.StreamValidator;

    const streamValidator = new StreamValidator("/tmp/repo/ontology", {
      isSummaryNeeded: true
    });

    const issues = [];

    streamValidator.on("issue", issue => {
      issues.push(issue);
    });

    streamValidator.on("finish", err => {
      console.log("finished with issues", issues);

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          name: "Resultat av datavalidering",
          antalFel: issues.length,
          result: issues
        })
      );
    });

    ddf.validate(streamValidator);
  });
};
