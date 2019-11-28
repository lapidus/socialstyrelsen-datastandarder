const ddf = require("ddf-validation");
const download = require("download-git-repo");

export default (req, res) => {
  console.log("req", req.query);

  if (!req.query.dataset) return res.end("No ?dataset provided");

  const dataset = req.query.dataset;

  download("lapidus/socialstyrelsen-datastandarder", "/tmp/repo", function(
    err
  ) {
    console.log(err ? "Error" : "Success");

    const StreamValidator = ddf.StreamValidator;

    let datasetPath = "/tmp/repo/ontology";

    if (dataset !== "ontology") {
      datasetPath = "/tmp/repo/dataset/" + dataset;
    }

    const streamValidator = new StreamValidator(datasetPath, {
      isSummaryNeeded: true
    });

    const issues = [];

    streamValidator.on("issue", issue => {
      issues.push(issue);
    });

    streamValidator.on("finish", err => {
      // console.log("finished with issues", issues);

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
