import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    country: "AD",
    läkemedel: 179,
    läkemedelColor: "hsl(280, 70%, 50%)",
    kostnader: 116,
    kostnaderColor: "hsl(123, 70%, 50%)",
    bensår: 111,
    bensårColor: "hsl(217, 70%, 50%)",
    diabetes: 62,
    diabetesColor: "hsl(18, 70%, 50%)",
    astma: 170,
    astmaColor: "hsl(12, 70%, 50%)",
    hemlöshet: 1,
    hemlöshetColor: "hsl(243, 70%, 50%)"
  },
  {
    country: "AE",
    läkemedel: 116,
    läkemedelColor: "hsl(340, 70%, 50%)",
    kostnader: 30,
    kostnaderColor: "hsl(230, 70%, 50%)",
    bensår: 152,
    bensårColor: "hsl(250, 70%, 50%)",
    diabetes: 81,
    diabetesColor: "hsl(200, 70%, 50%)",
    astma: 43,
    astmaColor: "hsl(45, 70%, 50%)",
    hemlöshet: 53,
    hemlöshetColor: "hsl(23, 70%, 50%)"
  },
  {
    country: "AF",
    läkemedel: 152,
    läkemedelColor: "hsl(120, 70%, 50%)",
    kostnader: 174,
    kostnaderColor: "hsl(77, 70%, 50%)",
    bensår: 175,
    bensårColor: "hsl(213, 70%, 50%)",
    diabetes: 6,
    diabetesColor: "hsl(77, 70%, 50%)",
    astma: 114,
    astmaColor: "hsl(229, 70%, 50%)",
    hemlöshet: 76,
    hemlöshetColor: "hsl(330, 70%, 50%)"
  },
  {
    country: "AG",
    läkemedel: 75,
    läkemedelColor: "hsl(170, 70%, 50%)",
    kostnader: 196,
    kostnaderColor: "hsl(201, 70%, 50%)",
    bensår: 35,
    bensårColor: "hsl(350, 70%, 50%)",
    diabetes: 154,
    diabetesColor: "hsl(53, 70%, 50%)",
    astma: 140,
    astmaColor: "hsl(226, 70%, 50%)",
    hemlöshet: 148,
    hemlöshetColor: "hsl(287, 70%, 50%)"
  },
  {
    country: "AI",
    läkemedel: 28,
    läkemedelColor: "hsl(155, 70%, 50%)",
    kostnader: 107,
    kostnaderColor: "hsl(349, 70%, 50%)",
    bensår: 47,
    bensårColor: "hsl(26, 70%, 50%)",
    diabetes: 184,
    diabetesColor: "hsl(216, 70%, 50%)",
    astma: 27,
    astmaColor: "hsl(140, 70%, 50%)",
    hemlöshet: 64,
    hemlöshetColor: "hsl(74, 70%, 50%)"
  },
  {
    country: "AL",
    läkemedel: 138,
    läkemedelColor: "hsl(78, 70%, 50%)",
    kostnader: 87,
    kostnaderColor: "hsl(15, 70%, 50%)",
    bensår: 30,
    bensårColor: "hsl(76, 70%, 50%)",
    diabetes: 163,
    diabetesColor: "hsl(257, 70%, 50%)",
    astma: 148,
    astmaColor: "hsl(280, 70%, 50%)",
    hemlöshet: 156,
    hemlöshetColor: "hsl(269, 70%, 50%)"
  },
  {
    country: "AM",
    läkemedel: 146,
    läkemedelColor: "hsl(231, 70%, 50%)",
    kostnader: 95,
    kostnaderColor: "hsl(152, 70%, 50%)",
    bensår: 20,
    bensårColor: "hsl(47, 70%, 50%)",
    diabetes: 200,
    diabetesColor: "hsl(90, 70%, 50%)",
    astma: 80,
    astmaColor: "hsl(61, 70%, 50%)",
    hemlöshet: 72,
    hemlöshetColor: "hsl(236, 70%, 50%)"
  }
];
const Chart = () => (
  <ResponsiveBar
    data={data}
    keys={[
      "läkemedel",
      "kostnader",
      "bensår",
      "diabetes",
      "astma",
      "hemlöshet"
    ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: "astma"
        },
        id: "dots"
      },
      {
        match: {
          id: "bensår"
        },
        id: "lines"
      }
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default Chart;
