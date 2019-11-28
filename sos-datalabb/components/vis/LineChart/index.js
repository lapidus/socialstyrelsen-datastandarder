import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(125, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 24
      },
      {
        x: "helicopter",
        y: 6
      },
      {
        x: "boat",
        y: 20
      },
      {
        x: "train",
        y: 247
      },
      {
        x: "subway",
        y: 2
      },
      {
        x: "bus",
        y: 57
      },
      {
        x: "car",
        y: 270
      },
      {
        x: "moto",
        y: 80
      },
      {
        x: "bicycle",
        y: 296
      },
      {
        x: "horse",
        y: 131
      },
      {
        x: "skateboard",
        y: 48
      },
      {
        x: "others",
        y: 243
      }
    ]
  },
  {
    id: "france",
    color: "hsl(336, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 293
      },
      {
        x: "helicopter",
        y: 40
      },
      {
        x: "boat",
        y: 233
      },
      {
        x: "train",
        y: 115
      },
      {
        x: "subway",
        y: 269
      },
      {
        x: "bus",
        y: 12
      },
      {
        x: "car",
        y: 186
      },
      {
        x: "moto",
        y: 101
      },
      {
        x: "bicycle",
        y: 252
      },
      {
        x: "horse",
        y: 239
      },
      {
        x: "skateboard",
        y: 212
      },
      {
        x: "others",
        y: 214
      }
    ]
  },
  {
    id: "us",
    color: "hsl(45, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 177
      },
      {
        x: "helicopter",
        y: 203
      },
      {
        x: "boat",
        y: 250
      },
      {
        x: "train",
        y: 194
      },
      {
        x: "subway",
        y: 53
      },
      {
        x: "bus",
        y: 170
      },
      {
        x: "car",
        y: 202
      },
      {
        x: "moto",
        y: 123
      },
      {
        x: "bicycle",
        y: 99
      },
      {
        x: "horse",
        y: 250
      },
      {
        x: "skateboard",
        y: 116
      },
      {
        x: "others",
        y: 69
      }
    ]
  },
  {
    id: "germany",
    color: "hsl(242, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 217
      },
      {
        x: "helicopter",
        y: 244
      },
      {
        x: "boat",
        y: 184
      },
      {
        x: "train",
        y: 60
      },
      {
        x: "subway",
        y: 299
      },
      {
        x: "bus",
        y: 23
      },
      {
        x: "car",
        y: 125
      },
      {
        x: "moto",
        y: 63
      },
      {
        x: "bicycle",
        y: 202
      },
      {
        x: "horse",
        y: 154
      },
      {
        x: "skateboard",
        y: 222
      },
      {
        x: "others",
        y: 131
      }
    ]
  },
  {
    id: "norway",
    color: "hsl(295, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 197
      },
      {
        x: "helicopter",
        y: 258
      },
      {
        x: "boat",
        y: 276
      },
      {
        x: "train",
        y: 27
      },
      {
        x: "subway",
        y: 276
      },
      {
        x: "bus",
        y: 120
      },
      {
        x: "car",
        y: 29
      },
      {
        x: "moto",
        y: 157
      },
      {
        x: "bicycle",
        y: 118
      },
      {
        x: "horse",
        y: 113
      },
      {
        x: "skateboard",
        y: 144
      },
      {
        x: "others",
        y: 235
      }
    ]
  }
];

const Line = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle"
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle"
    }}
    colors={{ scheme: "nivo" }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default Line;
