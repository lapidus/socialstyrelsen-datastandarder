import { ResponsiveScatterPlot } from "@nivo/scatterplot";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: "group A",
    data: [
      {
        x: 2,
        y: 1
      },
      {
        x: 85,
        y: 104
      },
      {
        x: 2,
        y: 84
      },
      {
        x: 68,
        y: 14
      },
      {
        x: 60,
        y: 102
      },
      {
        x: 42,
        y: 45
      },
      {
        x: 92,
        y: 84
      },
      {
        x: 17,
        y: 82
      },
      {
        x: 76,
        y: 112
      },
      {
        x: 36,
        y: 55
      },
      {
        x: 37,
        y: 89
      },
      {
        x: 63,
        y: 74
      },
      {
        x: 20,
        y: 47
      },
      {
        x: 29,
        y: 15
      },
      {
        x: 91,
        y: 9
      },
      {
        x: 76,
        y: 45
      },
      {
        x: 89,
        y: 7
      },
      {
        x: 63,
        y: 101
      },
      {
        x: 38,
        y: 115
      },
      {
        x: 78,
        y: 11
      },
      {
        x: 79,
        y: 96
      },
      {
        x: 85,
        y: 63
      },
      {
        x: 84,
        y: 79
      },
      {
        x: 2,
        y: 20
      },
      {
        x: 73,
        y: 76
      },
      {
        x: 37,
        y: 49
      },
      {
        x: 11,
        y: 26
      },
      {
        x: 96,
        y: 28
      },
      {
        x: 4,
        y: 108
      },
      {
        x: 86,
        y: 43
      },
      {
        x: 37,
        y: 71
      },
      {
        x: 86,
        y: 34
      },
      {
        x: 39,
        y: 4
      },
      {
        x: 43,
        y: 74
      },
      {
        x: 26,
        y: 52
      },
      {
        x: 75,
        y: 81
      },
      {
        x: 33,
        y: 51
      },
      {
        x: 10,
        y: 30
      },
      {
        x: 21,
        y: 84
      },
      {
        x: 45,
        y: 78
      },
      {
        x: 63,
        y: 12
      },
      {
        x: 87,
        y: 32
      },
      {
        x: 13,
        y: 63
      },
      {
        x: 37,
        y: 114
      },
      {
        x: 5,
        y: 111
      },
      {
        x: 15,
        y: 111
      },
      {
        x: 78,
        y: 118
      },
      {
        x: 32,
        y: 115
      },
      {
        x: 66,
        y: 52
      },
      {
        x: 64,
        y: 120
      }
    ]
  },
  {
    id: "group B",
    data: [
      {
        x: 8,
        y: 100
      },
      {
        x: 45,
        y: 10
      },
      {
        x: 62,
        y: 26
      },
      {
        x: 100,
        y: 114
      },
      {
        x: 58,
        y: 17
      },
      {
        x: 83,
        y: 45
      },
      {
        x: 30,
        y: 4
      },
      {
        x: 88,
        y: 98
      },
      {
        x: 60,
        y: 44
      },
      {
        x: 20,
        y: 50
      },
      {
        x: 1,
        y: 82
      },
      {
        x: 12,
        y: 31
      },
      {
        x: 72,
        y: 106
      },
      {
        x: 91,
        y: 7
      },
      {
        x: 100,
        y: 98
      },
      {
        x: 83,
        y: 94
      },
      {
        x: 62,
        y: 28
      },
      {
        x: 16,
        y: 87
      },
      {
        x: 35,
        y: 98
      },
      {
        x: 12,
        y: 74
      },
      {
        x: 62,
        y: 42
      },
      {
        x: 6,
        y: 53
      },
      {
        x: 18,
        y: 70
      },
      {
        x: 14,
        y: 74
      },
      {
        x: 90,
        y: 51
      },
      {
        x: 28,
        y: 105
      },
      {
        x: 14,
        y: 33
      },
      {
        x: 36,
        y: 120
      },
      {
        x: 57,
        y: 56
      },
      {
        x: 36,
        y: 88
      },
      {
        x: 5,
        y: 74
      },
      {
        x: 24,
        y: 99
      },
      {
        x: 18,
        y: 110
      },
      {
        x: 53,
        y: 18
      },
      {
        x: 84,
        y: 17
      },
      {
        x: 50,
        y: 105
      },
      {
        x: 50,
        y: 111
      },
      {
        x: 0,
        y: 43
      },
      {
        x: 43,
        y: 1
      },
      {
        x: 60,
        y: 104
      },
      {
        x: 72,
        y: 32
      },
      {
        x: 97,
        y: 119
      },
      {
        x: 80,
        y: 42
      },
      {
        x: 7,
        y: 86
      },
      {
        x: 0,
        y: 39
      },
      {
        x: 6,
        y: 114
      },
      {
        x: 49,
        y: 48
      },
      {
        x: 61,
        y: 46
      },
      {
        x: 8,
        y: 80
      },
      {
        x: 6,
        y: 71
      }
    ]
  },
  {
    id: "group C",
    data: [
      {
        x: 68,
        y: 53
      },
      {
        x: 96,
        y: 108
      },
      {
        x: 78,
        y: 71
      },
      {
        x: 72,
        y: 53
      },
      {
        x: 40,
        y: 107
      },
      {
        x: 21,
        y: 116
      },
      {
        x: 51,
        y: 57
      },
      {
        x: 55,
        y: 82
      },
      {
        x: 32,
        y: 46
      },
      {
        x: 59,
        y: 28
      },
      {
        x: 48,
        y: 103
      },
      {
        x: 44,
        y: 21
      },
      {
        x: 94,
        y: 37
      },
      {
        x: 9,
        y: 42
      },
      {
        x: 73,
        y: 20
      },
      {
        x: 9,
        y: 42
      },
      {
        x: 90,
        y: 61
      },
      {
        x: 6,
        y: 99
      },
      {
        x: 8,
        y: 56
      },
      {
        x: 55,
        y: 90
      },
      {
        x: 61,
        y: 29
      },
      {
        x: 92,
        y: 24
      },
      {
        x: 92,
        y: 58
      },
      {
        x: 34,
        y: 101
      },
      {
        x: 28,
        y: 115
      },
      {
        x: 43,
        y: 52
      },
      {
        x: 7,
        y: 112
      },
      {
        x: 44,
        y: 66
      },
      {
        x: 49,
        y: 101
      },
      {
        x: 17,
        y: 76
      },
      {
        x: 67,
        y: 2
      },
      {
        x: 40,
        y: 14
      },
      {
        x: 40,
        y: 32
      },
      {
        x: 32,
        y: 46
      },
      {
        x: 17,
        y: 72
      },
      {
        x: 39,
        y: 62
      },
      {
        x: 19,
        y: 95
      },
      {
        x: 76,
        y: 8
      },
      {
        x: 49,
        y: 41
      },
      {
        x: 99,
        y: 3
      },
      {
        x: 40,
        y: 10
      },
      {
        x: 79,
        y: 77
      },
      {
        x: 91,
        y: 10
      },
      {
        x: 87,
        y: 42
      },
      {
        x: 87,
        y: 17
      },
      {
        x: 11,
        y: 120
      },
      {
        x: 48,
        y: 99
      },
      {
        x: 64,
        y: 26
      },
      {
        x: 39,
        y: 65
      },
      {
        x: 49,
        y: 17
      }
    ]
  },
  {
    id: "group D",
    data: [
      {
        x: 38,
        y: 83
      },
      {
        x: 24,
        y: 6
      },
      {
        x: 70,
        y: 94
      },
      {
        x: 37,
        y: 80
      },
      {
        x: 4,
        y: 2
      },
      {
        x: 51,
        y: 27
      },
      {
        x: 87,
        y: 41
      },
      {
        x: 57,
        y: 109
      },
      {
        x: 14,
        y: 15
      },
      {
        x: 48,
        y: 46
      },
      {
        x: 4,
        y: 59
      },
      {
        x: 85,
        y: 68
      },
      {
        x: 53,
        y: 12
      },
      {
        x: 38,
        y: 44
      },
      {
        x: 80,
        y: 34
      },
      {
        x: 71,
        y: 30
      },
      {
        x: 7,
        y: 13
      },
      {
        x: 96,
        y: 76
      },
      {
        x: 77,
        y: 68
      },
      {
        x: 2,
        y: 91
      },
      {
        x: 93,
        y: 26
      },
      {
        x: 72,
        y: 68
      },
      {
        x: 75,
        y: 96
      },
      {
        x: 59,
        y: 79
      },
      {
        x: 75,
        y: 22
      },
      {
        x: 28,
        y: 73
      },
      {
        x: 79,
        y: 83
      },
      {
        x: 17,
        y: 32
      },
      {
        x: 83,
        y: 15
      },
      {
        x: 43,
        y: 93
      },
      {
        x: 68,
        y: 108
      },
      {
        x: 47,
        y: 36
      },
      {
        x: 5,
        y: 58
      },
      {
        x: 32,
        y: 32
      },
      {
        x: 58,
        y: 5
      },
      {
        x: 68,
        y: 2
      },
      {
        x: 94,
        y: 116
      },
      {
        x: 0,
        y: 72
      },
      {
        x: 80,
        y: 14
      },
      {
        x: 85,
        y: 11
      },
      {
        x: 70,
        y: 44
      },
      {
        x: 25,
        y: 42
      },
      {
        x: 46,
        y: 87
      },
      {
        x: 57,
        y: 76
      },
      {
        x: 79,
        y: 85
      },
      {
        x: 89,
        y: 45
      },
      {
        x: 83,
        y: 52
      },
      {
        x: 88,
        y: 88
      },
      {
        x: 66,
        y: 109
      },
      {
        x: 85,
        y: 41
      }
    ]
  },
  {
    id: "group E",
    data: [
      {
        x: 93,
        y: 37
      },
      {
        x: 19,
        y: 94
      },
      {
        x: 79,
        y: 16
      },
      {
        x: 73,
        y: 50
      },
      {
        x: 64,
        y: 57
      },
      {
        x: 92,
        y: 33
      },
      {
        x: 20,
        y: 106
      },
      {
        x: 68,
        y: 61
      },
      {
        x: 97,
        y: 37
      },
      {
        x: 61,
        y: 55
      },
      {
        x: 62,
        y: 68
      },
      {
        x: 39,
        y: 115
      },
      {
        x: 98,
        y: 9
      },
      {
        x: 26,
        y: 53
      },
      {
        x: 23,
        y: 90
      },
      {
        x: 21,
        y: 39
      },
      {
        x: 10,
        y: 38
      },
      {
        x: 90,
        y: 68
      },
      {
        x: 18,
        y: 17
      },
      {
        x: 50,
        y: 65
      },
      {
        x: 62,
        y: 47
      },
      {
        x: 73,
        y: 95
      },
      {
        x: 35,
        y: 57
      },
      {
        x: 42,
        y: 48
      },
      {
        x: 91,
        y: 35
      },
      {
        x: 16,
        y: 87
      },
      {
        x: 80,
        y: 94
      },
      {
        x: 74,
        y: 76
      },
      {
        x: 39,
        y: 14
      },
      {
        x: 53,
        y: 63
      },
      {
        x: 6,
        y: 22
      },
      {
        x: 40,
        y: 74
      },
      {
        x: 56,
        y: 30
      },
      {
        x: 26,
        y: 6
      },
      {
        x: 76,
        y: 32
      },
      {
        x: 40,
        y: 30
      },
      {
        x: 77,
        y: 34
      },
      {
        x: 33,
        y: 29
      },
      {
        x: 14,
        y: 50
      },
      {
        x: 87,
        y: 102
      },
      {
        x: 9,
        y: 67
      },
      {
        x: 12,
        y: 49
      },
      {
        x: 42,
        y: 63
      },
      {
        x: 27,
        y: 14
      },
      {
        x: 84,
        y: 44
      },
      {
        x: 96,
        y: 75
      },
      {
        x: 63,
        y: 43
      },
      {
        x: 65,
        y: 110
      },
      {
        x: 77,
        y: 47
      },
      {
        x: 14,
        y: 93
      }
    ]
  }
];

const Chart = () => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: "linear", min: 0, max: "auto" }}
    xFormat={function(e) {
      return e + " kg";
    }}
    yScale={{ type: "linear", min: 0, max: "auto" }}
    yFormat={function(e) {
      return e + " cm";
    }}
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "weight",
      legendPosition: "middle",
      legendOffset: 46
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "size",
      legendPosition: "middle",
      legendOffset: -60
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: "left-to-right",
        symbolSize: 12,
        symbolShape: "circle",
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
  />
);

export default Chart;
