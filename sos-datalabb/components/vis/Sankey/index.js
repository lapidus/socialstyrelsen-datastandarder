import { ResponsiveSankey } from "@nivo/sankey";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = {
  nodes: [
    {
      id: "John",
      color: "hsl(138, 70%, 50%)"
    },
    {
      id: "Raoul",
      color: "hsl(78, 70%, 50%)"
    },
    {
      id: "Jane",
      color: "hsl(243, 70%, 50%)"
    },
    {
      id: "Marcel",
      color: "hsl(357, 70%, 50%)"
    },
    {
      id: "Ibrahim",
      color: "hsl(183, 70%, 50%)"
    },
    {
      id: "Junko",
      color: "hsl(213, 70%, 50%)"
    }
  ],
  links: [
    {
      source: "Jane",
      target: "Marcel",
      value: 78
    },
    {
      source: "Jane",
      target: "Raoul",
      value: 165
    },
    {
      source: "Marcel",
      target: "John",
      value: 29
    },
    {
      source: "Marcel",
      target: "Raoul",
      value: 170
    },
    {
      source: "Marcel",
      target: "Ibrahim",
      value: 126
    },
    {
      source: "Junko",
      target: "Ibrahim",
      value: 129
    },
    {
      source: "Junko",
      target: "Marcel",
      value: 60
    },
    {
      source: "Junko",
      target: "Jane",
      value: 76
    },
    {
      source: "Ibrahim",
      target: "John",
      value: 197
    },
    {
      source: "Raoul",
      target: "Ibrahim",
      value: 55
    }
  ]
};

const Sankey = () => (
  <ResponsiveSankey
    data={data}
    margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
    align="justify"
    colors={{ scheme: "category10" }}
    nodeOpacity={1}
    nodeThickness={18}
    nodeInnerPadding={3}
    nodeSpacing={24}
    nodeBorderWidth={0}
    nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
    linkOpacity={0.5}
    linkHoverOthersOpacity={0.1}
    enableLinkGradient={true}
    labelPosition="outside"
    labelOrientation="vertical"
    labelPadding={16}
    labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
    animate={true}
    motionStiffness={140}
    motionDamping={13}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        translateX: 130,
        itemWidth: 100,
        itemHeight: 14,
        itemDirection: "right-to-left",
        itemsSpacing: 2,
        itemTextColor: "#999",
        symbolSize: 14,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000"
            }
          }
        ]
      }
    ]}
  />
);

export default Sankey;
